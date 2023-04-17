"use client"
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`

   margin-right: 1.5rem;
    color: #000;
  
  @media (min-width: 1024px) {
    margin-right: 2rem;
    
  }
  
 
  &:hover {
    color: #2E8B57;
  }

    svg {
      font-size: 1.5rem; 
      margin-left: 0.5rem; 
  
 
    @media (min-width: 640px) {
      display: none; 
   
    }
    @media (max-width: 640px) {
      display: flex;
      flex-direction: column;
   
    }

    }

  `;


export const Title = styled.span`
   font-size: 0.875rem; 
  margin-top: 0.5rem; 
  
  
  @media (max-width: 640px) {
    display: none; 
  }
  @media (min-width: 640px) {
    display: inline; 
  }
`
