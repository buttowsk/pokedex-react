import axios from "axios";
import {useEffect, useState} from "react";

export const useGenerateTypeInfo = (urls) => {
    const [typeInfo, setTypeInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        urls.map((url) => {
                axios.get(url.type.url)
                    .then((response) => {
                        setTypeInfo((prev) => [...prev, {typeInfos: response.data, name: url.type.name}]);
                    })
                    .catch((error) => {
                        setError(error);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            }
        );
    }, []);

    return { typeInfo, isLoading, error };
};