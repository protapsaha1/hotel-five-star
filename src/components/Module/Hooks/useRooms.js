import { useQuery } from "@tanstack/react-query";

const useRooms = () => {
    const { data: rooms, refetch, isLoading: loading } = useQuery({
        queryKey: ["rooms"],
        queryFn: async () => {
            const res = await fetch("http://localhost:6001/rooms")
            return res.json();
        }
    })
    return { rooms, refetch, loading };

};

export default useRooms;