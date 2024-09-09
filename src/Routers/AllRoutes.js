
import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound, Home } from "../Pages/index";


export const AllRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<Home apiPath="discover/movie" title="Moviespot" />} />
                <Route path="discover/movie" element={<Home apiPath="discover/movie" title="Moviespot" />} />
                <Route path="movies/now_playing" element={<MovieList apiPath="movie/now_playing" title="Moviespot-Now Playing" />} />
                <Route path="movie/:id" element={<MovieDetails apiPath={`movie/id`} />} />
                <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Moviespot-Popular" />} />
                <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Moviespot-Top" />} />
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Moviespot-Upcoming" />} />
                <Route path="search" element={<Search apiPath="search/movie" />} />
                <Route path="*" element={<PageNotFound title="Moviespot-Page Not Found" />} />
            </Routes>
        </>
    )
}
