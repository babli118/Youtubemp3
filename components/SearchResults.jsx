import React from "react";
import SearchVideoCard from "../containers/SearchVideoCard.jsx";

const SearchResults = ({ videos, keywords, setVideo }) => {
  // Filter the videos array to include only videos with titles
  const videosWithTitle = videos.videoData.filter((video) => video.title);

  return (
    <div>
      <h3 className="text-text text-3xl  mb-4 text-start mx-8 sm:mx-0 ">
        Showing Search Results For:
        <span className="font-semibold"> {keywords}</span>
      </h3>
      <div className="flex flex-col justify-center items-center text-start ">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {videosWithTitle.map((video) => (
            <SearchVideoCard video={video} key={video.id} setVideo={setVideo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
