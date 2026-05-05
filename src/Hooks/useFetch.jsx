import { useCallback, useState } from "react";
const useFetch = () => {
    const [dados, setDados] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, options) => {
        let response;
        let json;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            if (!response.ok) throw new Error(json.message);
        } catch (err) {
            json = null;
            setError(err.message);
        } finally {
            setDados(json);
            setLoading(false);
            return { response, json };
        };
    }, []);

    return { dados, loading, error, request };
};

export default useFetch;