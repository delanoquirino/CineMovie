import styled from "styled-components";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

export const CardContainer = styled.div`
  cursor: pointer;
  padding: 0.75rem; /* sm:p-3 */
  a {
    color: #000;
  }
  
  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1); /* sm:hover:shadow-slate-400 */
  }
  
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* sm:shadow-md */
  border-radius: 0.375rem; /* rounded-lg */
  border: 1px solid #CBD5E0; /* sm:border sm:border-slate-400 */
  display: inline-flex;
  margin: 0.5rem; /* sm:m-2 */
  transition: box-shadow 0.2s ease-in-out; /* transition-shadow duration-200 */

`

export const StyledImage = styled(Image)`
    border-top-left-radius: 0.375rem; /* sm:rounded-t-lg */
  
  &:hover {
    opacity: 0.8; /* group-hover:opacity-80 */
  }
  
  transition: opacity 0.2s ease-in-out; /* transition duration-200 */
`

export const CardInfo = styled.div`
  padding: 0.5rem; /* p-2 */
  color: #000;
`;


export const CardName = styled.h2`
font-size: 1.25rem; /* text-lg */
font-weight: bold; /* font-bold */
`;

export const CardDate = styled.p`
display: flex;
align-items: center;

`;

export const IconHeart = styled(AiFillHeart)`
  color: #ff0000; 
  margin-left: 0.5rem;
  margin-right: 0.25rem;
`;