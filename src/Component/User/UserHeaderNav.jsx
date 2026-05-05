import { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MinhasFotos from '../../Assets/feed.svg?react';
import Adicionarfoto from '../../Assets/adicionar.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css'
import useMedia from "../../Hooks/useMedia";
const UserHeaderNav = () => {
    const { userLogout } = useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem');
    const [mobileMenu, setMobileMenu] = useState(false); // estado reativo para saber se está ativo ou fechado
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    function handleLogout() {
        userLogout();
        navigate('/login');
    };

    return (
        <>
            {mobile && // O botão só irá aparecer se estiver no mobile
                <button aria-label="Menu"
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => setMobileMenu(!mobileMenu)}>
                </button>
            }
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                <NavLink to='/conta' end>
                    <MinhasFotos />
                    {mobile && 'Minhas Fotos'}
                </NavLink>

                <NavLink to='/conta/estatisticas'>
                    <Estatisticas />
                    {mobile && 'Estatísticas'}
                </NavLink>

                <NavLink to='/conta/postar'>
                    <Adicionarfoto />
                    {mobile && 'Adicionar Fotos'}
                </NavLink>

                <button onClick={handleLogout}>
                    <Sair />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </>
    );
};

export default UserHeaderNav;