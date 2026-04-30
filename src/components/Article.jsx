export default function Article({post}){
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.date}. {post.minutes} minutes read</p>
            <p>{post.preview}</p>
        </article>
    )
}