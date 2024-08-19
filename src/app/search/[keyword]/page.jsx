import Movies from '@/components/movies';
import React from 'react'

const Page =async ({searchParams}) => {

const keyword = params.keyword;
console.log(keyword)
const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"} ? api_key=accbcfc7b4176186d61e12c389d6cded&language=en-US&page=1`,{next: {revalidate:10000}})
  
  
  
const data =await res.json();

console.log(data?.results,"data")


return (
    <div>
      {
      !data?.results ? 
      <div>Aranılan şey bulunamadı</div> :
     <div className='flex items-center flex-wrap gap-3'>
        {
             data?.results?.map((dt,i)=>(
                <Movies key={i} dt={dt} />
              ))
        }
     </div>
      }
    </div>
  )
}

export default Page
