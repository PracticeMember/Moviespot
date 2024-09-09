import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card, Loading } from '../Components'
import { useFetch } from '../Hooks/useFetch'
import { useEffect } from 'react'
export const Search = ({ apiPath }) => {
    const [searchTerms] = useSearchParams()
    const queryTerm = searchTerms.get("q")
    console.log(queryTerm + " query" + apiPath)
    const { data: movies, loading } = useFetch(apiPath, queryTerm)

    useEffect(() => {
        document.title = `Search Results for ${queryTerm}`
    })
    return (
        loading ? (
            <Loading/>
        ) : (
            <main>
                <section >
                    {!loading && movies.length === 0 ?
                        (<p className='text-3xl font-semibold py-7 dark:text-white'>
                            No results found for "{queryTerm}"
                        </p>) : (
                            <><p className='text-3xl font-semibold pt-7 dark:text-white'>
                                Results for "{queryTerm}"
                            </p>
                                <div className='py-7 flex justify-start flex-wrap'>

                                    {
                                        movies.map((movie) => (<Card key={movie.id} movies={movie} />))
                                    }
                                </div>
                            </>)}

                </section>
            </main>)
    )
}
