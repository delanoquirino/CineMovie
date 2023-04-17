import styled from "styled-components";

export const ResultsContainer = styled.div`
        display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* para sm */
  
  @media (min-width: 768px) { /* para lg */
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  @media (min-width: 1024px) { /* para xl */
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  
  @media (min-width: 1280px) { /* para 2xl */
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  
  max-width: 90rem; /* max-w-5xl */
  margin: 0 auto; /* mx-auto */
  padding: 2rem 0; /* py-4 */
`