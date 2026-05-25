import { useEffect, useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';
const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinity, setInfinity] = useState(true); //Esse estado que vai definir se deve continuar puxando ou não os valores

    useEffect(() => {
        let wait = false;
        function infinityScroll() {
            if (infinity) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                if (scroll > height * .75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;
                    setTimeout(() => {
                        wait = false;
                    }, 500);
                };
            };
        };

        window.addEventListener('wheel', infinityScroll);
        window.addEventListener('scroll', infinityScroll);
        return () => {
            window.removeEventListener('wheel', infinityScroll);
            window.removeEventListener('scroll', infinityScroll);
        };
    }, [infinity]);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            {pages.map((page) => (
                <FeedPhotos
                    key={page}
                    user={user}
                    page={page}
                    setModalPhoto={setModalPhoto}
                    setInfinity={setInfinity} />
            ))}
        </div>
    );
};
Feed.defaultProps = {
    user: 0
};

Feed.prototype = {
    user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
};

export default Feed;