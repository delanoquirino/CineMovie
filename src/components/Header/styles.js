"use client"
import styled from "styled-components";

export const Menu = styled.div`
  display: flex; 
  justify-content: space-between; 
  margin-left: 0.5rem; 
  margin-right: 0.5rem;
  max-width: 68.75rem; 
  margin-left: auto; 
  margin-right: auto; 
  align-items: center; 
  padding-top: 1.5rem; 
  padding-bottom: 1.5rem; 
`
export const MenuContainer = styled.div`
  display: flex;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const LogoTitle = styled.h2`
font-size: 1.5rem;
@media (max-width: 640px) {
    display: none; 
  }
  @media (min-width: 640px) {
    display: inline; 
  }

`
export const FirstSpan = styled.span`
color: #000;
  font-weight: bold;
  background-color: #2E8B57;
  padding-top: 0.25rem; 
  padding-bottom: 0.25rem;
  padding-left: 0.5rem; 
  padding-right: 0.5rem; 
  border-radius: 0.5rem; 

`
export const SecondSpan = styled.span`
font-size: 1.25rem; 
color: #000;
 
`