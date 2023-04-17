import React from "react";
import { Card } from "../Card";
import * as S from "./styles"

export const Results = ({ results }) => {
    return (
        <S.ResultsContainer>
            {results &&
                results.map((result) => (
                    <Card key={result.id} result={result} />

                ))

            }

        </S.ResultsContainer>
    );
};


/* {results &&
                results.map((result) => <Card key={result.id} result={result} />)}
 */