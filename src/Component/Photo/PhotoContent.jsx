import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoComments from './PhotoComments';
import { useContext } from 'react';
import UserContext from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';
const PhotoContent = ({ dados, single }) => {
    const user = useContext(UserContext);
    const { photo, comments } = dados;

    return (
        <div className={`${styles.photo} ${single ? styles.single : ''}`}>
            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.dados && user.dados.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
                        <span className={styles.visualizacoes}>{photo.acessos}</span>
                    </p>
                    <h1 className='title'>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>{photo.peso} kg</li>
                        <li>
                            {Number(photo.idade) === 0
                                ? 'Menos de 1 ano'
                                : `${photo.idade} ${Number(photo.idade) === 1 ? 'ano' : 'anos'}`
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <PhotoComments single={single} id={photo.id} comments={comments} />
        </div>
    );
};

export default PhotoContent;