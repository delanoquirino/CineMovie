import Link from "next/link";
import React from "react";


import * as S from './styles'

export const Card = ({ result }) => {

    return (
        <S.CardContainer>
            <Link href={`/movie/${result.id}`}>
                <S.StyledImage
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    width={500}
                    height={300}
                    alt="movie image"
                    style={{ maxWidth: "100%", height: "auto" }}
                ></S.StyledImage>
                <S.CardInfo>
                    <p>{result.overview.substring(0, 40)} ...</p>
                    <S.CardName>{result.title || result.name}</S.CardName>
                    <S.CardDate className="flex items-center ">
                        {result.first_air_date || result.release_date}
                        <S.IconHeart className="text-red-500 ml-3 mr-1" /> {result.vote_count}{" "}
                    </S.CardDate>
                </S.CardInfo>
            </Link>
        </S.CardContainer>
    );
};

