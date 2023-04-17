"use client"
import { ThemeProvider } from 'next-themes';
import React from 'react'

import * as S from "./styles"

export const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="data-theme">
      <S.StyledProvider>{children}</S.StyledProvider>
    </ThemeProvider>
  )
}