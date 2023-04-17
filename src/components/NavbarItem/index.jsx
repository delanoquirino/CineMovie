'use client'
import React from 'react'

import * as S from './styles'

export const NavbarItem = ({ title, param }) => {

    return (
        <div>
            <S.NavBarItemLink href={`/?genre=${param}`}>
                {title}
            </S.NavBarItemLink>
        </div>
    )
}
