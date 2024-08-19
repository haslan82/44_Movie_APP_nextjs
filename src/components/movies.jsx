"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const Movies = ({dt}) => {
    //! console.log(dt)
    const router = useRouter();
  return (
    <div onClick={()=> router.push(`/movie/${dt?.id}`)} className='min-w-[470px] relative imgContainer cursor-pointer'>
      <Image width={470} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}/>
    <div className='absolute bottom-0 p-1 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity '>
        <div className='text-2xl font-bold'>{dt?.title}</div>
{dt?.release_date} / {(dt?.vote_average).toFixed(1)}
    </div>
    </div>
  )
}

export default Movies
