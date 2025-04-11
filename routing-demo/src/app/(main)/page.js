import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>Welcome Home!</h1>
            <Link href={'/profile'}>profile</Link> <br/>
            <Link href={'/blog'}>blog</Link> <br/>
            <Link href={'/about'}>about</Link> <br/>
            <Link href={'/products'}>products</Link><br/>
            <Link href={'/order-product'}>order product</Link><br/>
            <Link href={'/docs'}>docs</Link><br/>
            <Link href={'/dashboard'}>dashboard</Link><br/>
            <Link href={'/counter'}>counter</Link><br/>
            <Link href={'/articles/breaking-news-123?lang=en'}>read article</Link><br/>
        </>
    )
}