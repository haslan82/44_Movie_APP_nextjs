import Movies from "@/components/movies";
import React from "react";

const Page = async ({ searchParams }) => {
  console.log(searchParams);
  const keyword = params.keyword;
  console.log(keyword);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=accbcfc7b4176186d61e12c389d6cded&query=accbcfc7b4176186d61e12c389d6cded&language=en-US&include_adult=false`
  );

  /* `https://api.themoviedb.org/3/${
    searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
  } ? api_key=accbcfc7b4176186d61e12c389d6cded&language=en-US&page=1`,
  { next: { revalidate: 10000 } }

 */

  const data = await res.json();

  console.log(data?.results, "data");

  return (
    <div>
      {!data.results ? (
        <div>No Results Found!!!</div>
      ) : (
        <div className="flex flex-wrap gap-3 items-center justify-center ">
          {data.results.map((dt, key) => (
            <div
              className=" max-h-[300px] object-cover overflow-hidden  rounded-lg  "
              style={{ height: "300px", width: "470px" }}
            >
              <Movies key={key} dt={dt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
