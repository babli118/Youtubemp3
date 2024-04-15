import Image from "next/image";
import React from "react";
import DisplayDuration from "../utils/DurationDisplay.js";

const SearchVideoCard = ({ video, setVideo, scrollToSong }) => {
  const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
  const number = video.views;
  let formattedNumber;
  if (number >= 1000000000) {
    formattedNumber = (number / 1000000000).toFixed(1) + "B";
  } else if (number >= 1000000) {
    formattedNumber = (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    formattedNumber = (number / 1000).toFixed(1) + "k";
  } else {
    formattedNumber = number;
  }

  function truncateTitle(title, maxWords) {
    const words = title.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return title;
    }
  }

  return (
    <div
      onClick={async () => {
        const url = `https://www.youtube.com/watch?v=${video.id}`;
        setVideo(url);
      }}
      className="cursor-pointer hover:scale-105 transition-all"
    >
      <div
        style={{ width: "240px", height: "230px" }}
        className="bg-white rounded-md shadow-md hover:shadow-xl relative"
      >
        <div className="relative ">
          <Image
            className="rounded-md"
            src={thumbnailUrl}
            width={240}
            height={240}
            alt="thumbnail of video"
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              bottom: "4px",
              background: !video.duration ? "#FF0000" : "#080B0D", // Conditional background color
              opacity: 0.9,
              padding: "0 6px",
            }}
            className="font-medium bg-[#080B0D] text-white rounded-md"
          >
            {video.duration ? (
              <DisplayDuration durationInSeconds={video.duration} />
            ) : (
              "• LIVE"
            )}
          </div>
        </div>
        <div className="mx-2 mt-2">
          <p
            className="font-bold text-text overflow-hidden truncate line-clamp-2"
            style={{
              maxHeight: "1.3em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {truncateTitle(video.title, 6)}
          </p>
          <p
            style={{
              fontSize: "13px",
              marginTop: "2px",
            }}
            className=" text-text/30 pl-4  font-medium"
          >
            &#x2022; {formattedNumber} Views
          </p>

          <div className="mt-2 ">
            {" "}
            <div className=" flex  items-center">
              <div>
                <Image
                  className="mx-2"
                  style={{ borderRadius: "999px" }}
                  alt="channel logo"
                  width={25}
                  height={20}
                  src={video.channelThumbnail}
                />
              </div>
              <p
                style={{ color: "rgb(22 19 19 / 0.7)" }}
                className="text-sm font-semibold t"
              >
                {truncateTitle(video.channel, 2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
