export default function About({blogData}){

    return (
        <aside>
          <img src={blogData.image} alt="Profile picture" />
          <p>{blogData.about}</p>
        </aside>
    )

}