import { useState, useEffect } from "react";
import useUrl from "../../hook/useUrl";

import * as S from '../../styles/movie'

const API_KEY = "eadadc1ea1014e5a45d91727f1286d8d";

export default function Movieid() {
    const [movie, setMovie] = useState([]);
    const url = useUrl();

    useEffect(() => {

        const fetchResults = async () => {
            const movieId = url.query.movie;
            console.log(movieId)
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
            );

            const data = await res.json();
            setMovie(data);


        };

        fetchResults();

    }, [url]);



    return (
        <S.Container>
            <S.Content>
                <S.MovieImage
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    width={500}
                    height={500}
                    alt="movie image"
                />
                <S.MovieDetails>
                    <h2>{movie.title || movie.name}</h2>
                    <p>
                        <span >Resumo: </span>
                        {movie.overview}
                    </p>
                    <p>
                        <span >Data de lançamento: </span>
                        {movie.first_air_date || movie.release_date}
                    </p>
                    <S.Rating>
                        <span >Avaliação: </span>
                        <S.Heart className="text-red-500" />
                        {movie.vote_count}
                    </S.Rating>
                </S.MovieDetails>

            </S.Content>
        </S.Container>
    );


}
