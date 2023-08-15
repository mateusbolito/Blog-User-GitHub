import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfilePicture, ProfileText } from "./styles";
import github from '../../../../assets/github.png'
import company from '../../../../assets/company.png'
import follow from "../../../../assets/follow.png"
 

export function Profile() {
    return(
       <ProfileContainer>
         <ProfilePicture src="https://github.com/mateusbolito.png"/>

         <ProfileText>
          <header>
            <h1>Mateus bolito</h1> 
            <ExternalLink text={"github"} href="#" />
            </header>  
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. 
            Eu viverra massa quam dignissim 
            aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p> 

            <ul>
               <li>
               <img src={github} />
                Sinop
               </li>
               <li>
               <img src={company} />
                Dev
               </li>
               <li>
               <img src={follow} />
                32 seguidores
               </li>
            </ul>
         </ProfileText>  
        
       </ProfileContainer>
    )
 }