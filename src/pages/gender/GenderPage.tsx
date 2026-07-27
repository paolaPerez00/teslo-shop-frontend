import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mock/products.mocks"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useParams } from "react-router"

export const GenderPage = () => {

    const { gender } = useParams();

    const genderLabel = gender === 'men'
        ? 'Hombres'
        : gender === 'women'
            ? 'Mujeres' : 'Niños';
    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`}></CustomJumbotron >
            <ProductsGrid products={products}></ProductsGrid >
            <CustomPagination totalPages={5}></CustomPagination >
        </>
    )
}

