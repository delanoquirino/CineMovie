import Link from 'next/link'
import { MenuItem } from '../MenuItems'
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import * as S from './styles'

export const Header = () => {
    return (
        <>
            <S.Menu>
                <S.MenuContainer>
                    <MenuItem title={'HOME'} address={"/"} Icon={AiFillHome} />
                    <MenuItem title={'About'} address={"/about"} Icon={AiFillInfoCircle} />
                </S.MenuContainer>

                <S.LogoContainer>

                    <Link href="/">
                        <S.LogoTitle>
                            <S.FirstSpan>Cine</S.FirstSpan>
                            <S.SecondSpan>Movie</S.SecondSpan>
                        </S.LogoTitle>
                    </Link>
                </S.LogoContainer>
            </S.Menu>

        </>
    )
}
