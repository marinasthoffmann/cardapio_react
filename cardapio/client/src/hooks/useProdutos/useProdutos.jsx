import { useEffect, useState } from "react"
import { apiService } from "../../services/api";

export const useProdutos = () => {
    const [produtos, setProdutos] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setIsLoading(true);

        const { data, error } = await apiService.get('/produtos');

        if(data){
            const entradas = data.filter((item) => item.secao == 'Entradas');
            const sobremesas = data.filter((item) => item.secao == 'Sobremesas');
            const principais = data.filter((item) => item.secao == 'Principais');
            setProdutos({entradas, principais, sobremesas});
        }

        setError(error);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { produtos, isLoading, error };
};