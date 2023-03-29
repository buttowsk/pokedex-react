import axios from "axios";
import {useEffect, useState} from "react";

export const useGenerateTypeInfo = (url) => {
    const [typeInfo, setTypeInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
            .then((response) => {
                setTypeInfo(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return { typeInfo, isLoading, error };
};