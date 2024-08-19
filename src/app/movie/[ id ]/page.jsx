
import Image from 'next/image';
import React from 'react'

const getMovie =async (id)=> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=accbcfc7b4176186d61e12c389d6cded`)

return await res.json();

}


const Page = async ({params}) => {
    const id = params.id;
   
    const movieDetail = await getMovie(id)
   console.log( movieDetail)
  return (
    <div className='relative p-7 min-h-screen'>
    <Image style={{objectFit:"cover"}} fill width={470} height={300} src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}/>  
    </div>
  )
}


export default Page
