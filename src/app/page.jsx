import Movies from "@/components/movies";
import React from "react";

const Page = async ({ searchParams }) => {
  console.log(searchParams);

 

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=accbcfc7b4176186d61e12c389d6cded`
  );

  const data = await res.json();

  return (
    <div className="flex items-center justify-between flex-wrap gap-3 ">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
