import styled from "styled-components";

export const div = styled.div`
   color: black; 
  min-height: 100vh; 
  user-select: none; 
  z-index: 10; 
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out; 

  &.dark {
    color: #f8f8f8; 
    background-color: #4a5568; 
  }

`