import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"
import { useParams } from "react-router"

export const GenderPage = () => {

    const { gender } = useParams();
    const { data } = useProducts();

    const genderLabel = gender === 'men'
        ? 'Hombres'
        : gender === 'women'
            ? 'Mujeres' : 'Niños';
    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`}></CustomJumbotron >
            <ProductsGrid products={data?.products || []}></ProductsGrid >
            <CustomPagination totalPages={data?.pages || 1}></CustomPagination >
        </>
    )
}

