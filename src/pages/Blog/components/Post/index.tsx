
import { Ipost } from "../..";
import { PostContainer } from "./styles";

 interface PostProps {
    post: Ipost
 }

 export function Post({post}: PostProps)  {
    return(
        <PostContainer to={`/post/${post.number}`}>
        <div>
        <strong>{post.title} </strong>
        <span>{post.created_at} </span>
        </div> 
        <p>{post.body} </p>
        
        </PostContainer>
    )
 }