export default function About({blogData}){
    const placeholder = "https://via.placeholder.com/215"
    return (
        <aside>
          <img src={blogData.image} alt="blog logo" onError={(e) => { e.target.src = placeholder; }} />
          <p>{blogData.about}</p>
        </aside>
    )

}