import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../Api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
const LoginPasswordLost = () => {
    const login = useForm()
    const { dados, loading, error, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        if (login.validate()) {
            const { url, options } = await PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('perdeu', 'resetar'),
            });
            const { json } = await request(url, options);
        };
    };

    return (
        <section className="animeLeft">
            <Head title='Perdeu a Senha ' />
            <h1 className='title'>Perdeu a senha?</h1>
            {dados ? <p style={{ color: '#4c1' }}>{dados}</p> :
                <form onSubmit={handleSubmit}>
                    <Input label='Email / Usuario' type='text' name='login' {...login} />
                    {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
                </form>}
            <Error error={error} />
        </section>
    );
};

export default LoginPasswordLost;