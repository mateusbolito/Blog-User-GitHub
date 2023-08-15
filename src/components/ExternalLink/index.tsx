import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";
import font from "../../assets/font.png"
 type ExternalLinkProps = ComponentProps< typeof ExternalLinkContainer> &{
    text:string;
    icon?: ReactNode;
    variant?: "iconLeft";
 }

 export function ExternalLink({text, icon,...rest}: ExternalLinkProps ) {
    return(
        <ExternalLinkContainer {...rest}>  {text}
        {icon?? <img src={font} alt="" />}
        </ExternalLinkContainer>
    )
 }