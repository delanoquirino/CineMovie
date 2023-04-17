import styled from "styled-components";
import Link from 'next/link'

export const NavBarItemLink = styled(Link)`
  margin: 1rem;
  font-weight: 600; 
  padding: 0.5rem; 
  color: #000;
  
  
  &:hover {
      color: #2E8B57; 
    }
    @media (max-width: 640px) {
    font-size: 70%;
    margin: 0;
  }
 
`