import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {AddCategory, GetAllCategorys} from "./apiCateg"

function useGetCategories() {
    const query = useQuery({
        queryKey: ['allCategories'],
        queryFn: () => GetAllCategorys(),
        staleTime: 1 * 60 * 1000, // Consider data stale after 10 minutes
        gcTime: 1 * 60 * 1000, // Keep data in cache for 20 minutes
    });

    return query;
}
function useAddCategory() {
    const queryClient = useQueryClient();

    const {isLoading:isAdding, mutate:addCategory} = useMutation(
        {
            mutationFn: AddCategory,
            onError: async (err) => {
                    console.log("err", err)
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allCategories'],
                })
                console.log("הקטגוריה נוספה בהצלחה","success")
            },
        }
    );

    return {isAdding, addCategory};
}

export {
    useGetCategories,
    useAddCategory,
};
