import Article from "./Article"

export default function ArticleList({blogData}){

    return(
        <ul> 
            {blogData.posts.map(post => (
                <li key={post.id}><Article post = {post}/></li>
            ))}
        </ul>
    )

}