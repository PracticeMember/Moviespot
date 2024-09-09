import { useState, useEffect } from 'react'

export const useFetch = (apiPath, queryTerm = "", genreId = "") => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}${queryTerm?`&query=${queryTerm}` : ""}${genreId ? `&with_genres=${genreId}` : ""}`

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true)
            const response = await fetch(url);
            const jsondata = await response.json();
            setLoading(false)
            setData(jsondata.results)
        }
        fetchMovies();
    }, [url])

    return { data, loading }

}
