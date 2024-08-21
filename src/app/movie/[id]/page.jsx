import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=accbcfc7b4176186d61e12c389d6cded`);

  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;

  const movieDetail = await getMovie(id);
  console.log(movieDetail);

  const dtvote = movieDetail?.vote_average >= 7 ? "bg-green-600" : "bg-red-600";
  return (
    <div className="relative p-7 min-h-screen">
      <Image
      alt="hata var"
      className="rounded-lg"
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className=" flex my-3 gap-2 items-center">
          {movieDetail?.release_date} / 
          <span className={`${dtvote} p-2 rounded-lg`}>
            IMDB: {parseFloat(movieDetail?.vote_average.toFixed(1))}
          </span>
        </div>
        <div className="border w-32 hover:bg-white hover:text-black  p-2 my-2 rounded-md cursor-pointer text-lg text-center">
          Trail
        </div>
      </div>
    </div>
  );
};
export default Page;
