import { ExternalLink } from "../../../components/ExternalLink";
import { PostHeaderContainer } from "./PostHeader/styles";
import github from "../../../assets/github.png"
import font from "../../../assets/font.png"
import { useNavigate } from "react-router-dom";
 
 export function PostHeader() {
    const navigate = useNavigate();

    function goBack() {
        navigate("/")
    }
    return(
        <PostHeaderContainer>
            <header>
                <ExternalLink 
                as="button" img={font} 
                text="voltar" 
                onClick={goBack}
                variant="iconLeft"/>
               
                <ExternalLink text="ver no github" href="#" target="_blank"/>
            </header>
             <h1>JavaScript data types and data structures</h1> 

             <ul>
                <li>
                  <img src={github} alt="" />
                  sinop
                </li>
                <li>
                  <img src={github} alt="" />
                  Há 1 dia
                </li>
                <li>
                  <img src={github} alt="" />
                  5 comentarios
                </li>
             </ul>
        </PostHeaderContainer>
    )
 }