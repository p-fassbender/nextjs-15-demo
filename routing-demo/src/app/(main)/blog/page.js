export const metadata = {
    title: {
        absolute: 'blog',
    }
}

export default async function Blog() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve('intentional delay')
        }, 2000)
    })
    return <h1>My Blog</h1>
}