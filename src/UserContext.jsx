import { createContext, useEffect, useState, useCallback } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './Api'
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
export const UserStorage = ({ children }) => {
    const [dados, setDados] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // função para tirar o user completo
    const userLogout = useCallback(async function () {
        setDados(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
    }, []);

    useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token'); // Recuperação
            if (token) { // Verificação
                try {
                    setError(null); // Estados Iniciais
                    setLoading(true); // Estados Iniciais
                    const { url, options } = TOKEN_VALIDATE_POST(token); // Preparação
                    const response = await fetch(url, options) // Fetch/Validação
                    if (!response.ok) throw new Error('Token inválido'); // Verificação de Erro
                    await getUser(token); // Sucesso
                } catch (err) {
                    userLogout();
                } finally {
                    setLoading(false);
                };
            } else {
                setLogin(false);
            };
        };
        autoLogin();
    }, [userLogout]);

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json() // aqui onde estão os dados do usuáraio
        setDados(json);
        setLogin(true);
    };

    // função para logar o usuário
    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);
            // Desestruturando url e options do meu TOKEN_POST
            const { url, options } = TOKEN_POST({ username, password });
            const tokenRes = await fetch(url, options);
            if (!tokenRes.ok) throw new Error(`Error: Usuário Inválido`);
            const { token } = await tokenRes.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate('/conta');
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        };
    };

    return (
        <UserContext.Provider value={{ userLogin, userLogout, dados, loading, login, error }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;