"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
  console.log(dt);

  const router = useRouter();
   const dtvote = dt?.vote_average >= 7 ? "bg-green-600" : "bg-red-600";
return(
  <div className="rounded-lg">
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[470px] relative rounded-lg imgContainer cursor-pointer"
    >
      <Image
        style={{ objectFit: "cover" }}
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />
      <div className="absolute bottom-0 p-1 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity ">
        <div className="text-2xl font-bold">{dt?.title}</div>
        <div className=" flex my-3 gap-2 items-center">
          {/* {dt?.release_date} / {(dt?.vote_average).toFixed(1)} */}
          {dt?.release_date} / 
              <span className={`vote p-1 rounded-md ${dtvote}`}>
                IMDB: {parseFloat(dt?.vote_average.toFixed(1))}
              </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Movies;
