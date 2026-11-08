import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id.action"
import { createUpdateProductAction } from "../actions/create-update-product.action"

export const useProduct = (id: string) => {

    const queryCLient = useQueryClient()


    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutos,
        //enabled: !id
    })

    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product) => {
            //Invalidar caché
            queryCLient.invalidateQueries({ queryKey: ['products'] })
            queryCLient.invalidateQueries({ queryKey: ['product', { id: product.id }], })
            //Actualiza queryData
            queryCLient.setQueryData(['products', { id: product.id }], product)
        }
    });

    //TODO: manejar la mutacion
    return { ...query, mutation }
}
