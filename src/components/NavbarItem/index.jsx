'use client'
import React from 'react'

import * as S from './styles'

export const NavbarItem = ({ title, param }) => {

    return (
        <div>
            <S.NabBarItemLink href={`/?genre=${param}`}>
                {title}
            </S.NabBarItemLink>
        </div>
    )
}
