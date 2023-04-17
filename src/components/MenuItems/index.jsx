
import React from "react"

import * as S from './styles'


export const MenuItem = ({ title, address, Icon }) => {
    return (

        <>
            <S.StyledLink href={address}>
                <Icon />
                <S.Title>{title}</S.Title>
            </S.StyledLink>
        </>

    )
}
