export const generateMetadata = async ({ params }) => {
    const id = (await params).productId
    return {
        title: `product ${id}`
    }
}

export default async function ProductDetails({ params }) {
    const productId = (await params).productId
    return <h1>Details about product {productId}</h1>
}