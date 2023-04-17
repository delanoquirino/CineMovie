import React from 'react'
import { NavbarItem } from '../NavbarItem'

import * as S from './styles'

export const Navbar = () => {

    return (
        <S.NavBarContainer>
            <NavbarItem title={'Trending'} param="fecthTrending" />
            <NavbarItem title={'Top Rated'} param="fecthTopRated" />
        </S.NavBarContainer>
    )
}
