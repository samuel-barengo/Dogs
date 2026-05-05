import { useEffect, useState } from "react";
const useMedia = (media) => { // 40 rem
    const [match, setMatch] = useState(null);

    useEffect(() => { // A função vai ocorrer toda vez que tiver um resize no Window
        function changeMatch() {
            const { matches } = window.matchMedia(media);
            setMatch(matches);
        };
        changeMatch();
        window.addEventListener('resize', changeMatch);
        return () => {
            window.removeEventListener('resize', changeMatch);
        };
    }, [media]);

    return match;
};

export default useMedia;