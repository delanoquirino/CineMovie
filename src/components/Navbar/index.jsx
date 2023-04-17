import React from 'react'
import { NavbarItem } from '../NavbarItem'

import * as S from './styles'

export const Navbar = () => {

    return (
        <S.NavBarContainer>
            <NavbarItem title={'Em Alta'} param="fecthTrending" />
            <NavbarItem title={'Mais votado'} param="fecthTopRated" />
        </S.NavBarContainer>
    )
}
