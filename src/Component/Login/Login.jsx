import styles from './Login.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './loginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordlost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { useContext } from 'react';
import UserContext from '../../UserContext';
import NotFound from '../NotFound';

const Login = () => {
    const { login } = useContext(UserContext);
    if (login === true) return <Navigate to='/conta' />

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='criar' element={<LoginCreate />} />
                    <Route path='perdeu' element={<LoginPasswordlost />} />
                    <Route path='resetar' element={<LoginPasswordReset />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </section>
    );
};

export default Login;