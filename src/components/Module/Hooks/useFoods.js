import { useQuery } from "@tanstack/react-query";

const useFoods = () => {

    const { data: foods, refetch, isLoading: loading } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch("http://localhost:6001/foods")
            return res.json();

        }
    })
    return { foods, refetch, loading };
};

export default useFoods;