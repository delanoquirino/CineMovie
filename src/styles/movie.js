import styled from "styled-components";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
 `;

export const Content = styled.div`
  padding: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 80rem;
  margin: auto;
  gap: 1rem;
  
  
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;

export const MovieImage = styled(Image)`
  border-radius: 0.5rem;
  width:80%;
  height: auto;
  @media (max-width: 1100px) {
    width:100%;
    }
`;

export const MovieDetails = styled.div`

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
`;

export const Heart = styled(AiFillHeart)`
    color: red;
    margin-left: 0.5rem;
    margin-right: 0.25rem;
`

