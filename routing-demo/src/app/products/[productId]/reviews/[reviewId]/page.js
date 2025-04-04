export default async function ProductReview({ params }) {
    const { productId, reviewId } = await params
    return <h1>review {reviewId} for product {productId}</h1>
}