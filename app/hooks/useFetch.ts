import { useState, useEffect } from 'react';

const useFetch = (fileName: string) => {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async (fileName: string) => {
            try {
                const response = await fetch(fileName);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData(fileName);
    }, [fileName]);

    return { data, loading, error };
}

export default useFetch;