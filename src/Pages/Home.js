import React from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'
import { NavLink, useLocation } from 'react-router-dom'
import { Card } from '../Components'
import "../index.css"

export const Home = ({ apiPath , title}) => {

  const [genreId, setGenreId] = useState("28")
  const {search}=useLocation()
  const { data: movies } = useFetch(apiPath, "", genreId)
  const [allgenres, setGenres] = useState([])

  const isActive=(value)=>{
    const cq=new URLSearchParams(search)
    return cq.get('genre')===value;
  };

  useEffect(() => {
    async function fetchGenres() {
      const genreResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
      const genresData = await genreResponse.json();

      console.log(typeof allgenres + " all genres")
      const genresArray = genresData.genres
      console.log(Array.isArray(genresArray) + " all genres array")
      genresArray.forEach(item => console.log(item))
      setGenres(genresArray)

    };
    fetchGenres();
  }, [])

  useEffect(()=>{
    document.title=title
  })

  return (
    <section >
      {allgenres.length === 0 ? (<p>no items</p>) :
        (<div className='scroll-container w-[85%] relative mx-auto rounded-sm'> 
        <div className='font-medium flex overflow-x-auto whitespace-nowrap rounded-lg dark:text-white text-gray-600 py-4  px-2 scroll-content'>
          {allgenres.map(genre => (
            <NavLink to={`/discover/movie?genre=${genre.id}`} >
              <div key={genre.id} onClick={() => setGenreId(genre.id)} className={`${isActive(`${genre.id}`)? "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white" : ""} bg-slate-200 text-md rounded-lg cursor-pointer  px-4 py-2 mx-2  flex-wrap inline-block dark:bg-gray-800`}>{genre.name}</div>
            </NavLink>
          ))}
        </div></div>)}


      <section className='max-w-7xl mx-auto py-4 my-7'>

        <div className='flex justify-center flex-wrap other:justify-evenly'>
          {
            movies.map((movie) => (<Card key={movie.id} movies={movie} />))
          }
        </div>
      </section>
    </section>


  )
}


