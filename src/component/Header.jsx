import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg?react';
import { useContext } from 'react';
import { UserContext } from '../UserContext'
const Header = () => {
    const { dados } = useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
                    <Dogs />
                </Link>

                {dados ? (
                    <Link className={styles.login} to='/conta'>
                        {dados.nome}
                    </Link>
                ) : (
                    <Link className={styles.login} to="/login">
                        Login / Criar
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;