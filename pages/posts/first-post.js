
import getPost from '../../lib/posts';


export async function getStaticProps(){
    const post=await getPost('first-post');


    return {
        props:{
           post:{
                title:"This is a title",
            desc:"This the post description"
           }
        }
    }
}

const FirstPost=({post})=>{


    return (
        <div>
        <h3>{post.title}</h3>
        <p>{post.desc}</p>
        </div>
    )
}

export default FirstPost;