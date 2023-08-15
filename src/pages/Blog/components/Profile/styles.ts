 


 import styled from "styled-components";

 export const ProfileContainer = styled.section`
   width: 100%;
   min-height: 13.25rem;
   margin-top: -5.5rem;
   background: ${({ theme }) => theme.colors["base-profile"]};
   box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
   border-radius: 10px;
   padding: 2rem 2.5rem;
   display: flex;
   gap: 2rem;
 `;
 
 export const ProfilePicture = styled.img`
   width: 9.25rem;
   height: 9.25rem;
   border-radius: 8px;
   object-fit: cover;
 `; 

 export const ProfileText = styled.div`
 flex: 1;
display: flex;
 flex-direction: column;

 header {
  display: flex;
  align-items: center;
  justify-content: space-between;
 } 
 h1 {
  font-size: ${props => props.theme.textSizes["title-title-l"]};
 }
 p {
  margin-top: 1rem;
 } 
 ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
 } 
 li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
 }
 `;