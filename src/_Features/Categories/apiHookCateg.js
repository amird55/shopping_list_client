import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {GetAllCategorys} from  "./apiCateg"

function useGetCategories() {
    const query = useQuery({
        queryKey: ['allCategories'],
        queryFn: () => GetAllCategorys(),
        staleTime: 1 * 60 * 1000, // Consider data stale after 10 minutes
        gcTime: 1 * 60 * 1000, // Keep data in cache for 20 minutes
    });

    return query;
}

export {
    useGetCategories,
};
