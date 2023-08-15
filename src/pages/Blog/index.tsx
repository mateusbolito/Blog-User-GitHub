import { useCallback, useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";
import { api } from "../../lib/axios";


 const username = import.meta.env.VITE_GITHUB_USERNAME;
 const repoName = import.meta.env.VITE_GITHUB_REPONAME;

  export interface Ipost {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
      login: string;
    };
  }

 export function Blog() {
   const [posts, setPosts] = useState<Ipost[]>([])

   const getPost = useCallback(async(query: string = "") => {
      try {
        const response = await api.get(`https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge`)
        
        setPosts(response.data.items)
      } finally {
      
      }
   }, [posts]) 

    useEffect(() => {
      getPost();
    }, [])
   
    return(
        <>
         <Profile />
         <SearchInput /> 

         <PostListContainer>
            {posts.map((post) => (
            <Post key={post.number} post={post} />
            ))}
            
           
         </PostListContainer>
        </>
    )
 }