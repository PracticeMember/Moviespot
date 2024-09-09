import React, { useEffect } from 'react'
import { Card } from '../Components'
import { useFetch } from '../Hooks/useFetch'

export const MovieList = ({ apiPath,title }) => {

  const { data: movies } = useFetch(apiPath)
  useEffect(()=>{
    document.title=title
  })

  return (
    <main>
      <section className='max-w-7xl mx-auto py-4 '>
          
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {
            movies.map((movie) => (<Card key={movie.id} movies={movie} />))
          }
        </div>
      </section>
    </main>
  )
}
