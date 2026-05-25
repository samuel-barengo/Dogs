import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTOS_GET } from "../../Api";
import styles from './FeedPhotos.module.css'
const FeedPhotos = ({ page, user, setInfinity, setModalPhoto }) => {
    const { dados, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhotos() {
            const total = 6 ;
            const { url, options } = PHOTOS_GET({ page, total, user });
            const { response, json } = await request(url, options);
            if (response && response.ok && json.length < total) setInfinity(false);
        };
        fetchPhotos();
    }, [request, user, page, setInfinity]);

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (dados)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {dados.map(photo =>
                    <FeedPhotosItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto} />)}
            </ul>
        );
    else return null;
};

export default FeedPhotos;