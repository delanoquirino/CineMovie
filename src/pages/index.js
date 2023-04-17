import { Results } from "@/components/Results";
import { useState, useEffect } from "react";
import useUrl from "./useUrl";
import Head from "next/head";


const API_KEY = "eadadc1ea1014e5a45d91727f1286d8d";
export default function Home() {
  const [results, setResults] = useState([]);
  const url = useUrl();

  useEffect(() => {

    const fetchResults = async () => {
      const genre = url.query.genre;

      const res = await fetch(`https://api.themoviedb.org/3/${genre === "fecthTrending" ? "movie/top_rated" : "trending/all/week"
        }?api_key=${API_KEY}&language=pt-BR&page=1`
      );

      const data = await res.json();
      setResults(data.results);

    };

    fetchResults();

  }, [url]);

  return (
    <div>
      <Head>
        <title>CineMovie</title>
      </Head>
      <Results results={results} />
    </div>
  );
}