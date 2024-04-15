"use client";
import React, { useRef, useState } from "react";
import Link from "next/link.js";
import getVideoInfo from "../utils/getVideoInfo.js";
import { regexYTvid } from "../utils.jsx";
import getSearch from "../utils/getSearch.js";
import VideoCard from "../containers/VideoCard.jsx";
import SkeletonContainer from "../containers/SkeletonContainer.jsx";
import SearchResults from "./SearchResults.jsx";
import { ThreeCircles } from "react-loader-spinner";
import ScrollToTop from "react-scroll-to-top";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

const SearchBox = ({ mp3, dl, pholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const [searchVideos, setSearchVideos] = useState(null);
  const [error, setError] = useState(false);
  const [duration, setDuration] = useState("");
  const [keywords, setKeywords] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [showSkeletons, setShowSkeletons] = useState(false);

  const songRef = useRef(null);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    setVideoUrl(inputValue);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setVideoUrl(value);
    setVideoUrl(inputValue);
    setIsClicked(true);
  };
  const handleInputPaste = async (e) => {
    e.preventDefault();
    const pastedContent = e.clipboardData.getData("text");

    setInputValue(pastedContent);
    setVideoUrl(pastedContent);
    setError(null);
    setLoading(true); // Set loading to true when download starts

    if (
      pastedContent.startsWith("https://www.youtube.com/") ||
      pastedContent.startsWith("https://music.youtube.com/") ||
      pastedContent.startsWith("youtube.com/") ||
      pastedContent.startsWith("www.youtube.com/") ||
      pastedContent.startsWith("https://youtu.be") ||
      pastedContent.startsWith("youtu.be") ||
      pastedContent.startsWith("www.youtu.be")
    ) {
      setSearchVideos(null);
      setVideoInfo("");
      setSearchVideos("");

      try {
        document.activeElement.blur();
        const videoInfo = await getVideoInfo(pastedContent);
        const video = videoInfo.video;
        const id = regexYTvid(pastedContent);
        const url = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

        setThumbnailUrl(url);

        setVideoInfo(videoInfo);
        setLoading(false); // Set loading to false when download is complete
        videoInfo ? scrollToSong() : null;
        setInputValue("");
      } catch (error) {
        setLoading(false); // Handle error and set loading to false
        console.error("Error downloading video information:", error);
      }
    } else {
      setLoading(false);
    }
  };

  const scrollToSong = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640 && songRef.current) {
      // Adjust the value according to your 'sm' breakpoint
      const topPosition = songRef.current.offsetTop;
      const offset = 200; // Adjust this value according to your layout
      window.scrollTo({
        top: topPosition - offset,
        behavior: "smooth",
      });
    } else {
      null;
    }
  };

  const handleClickFromSearch = async (url) => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setLoading(false);
      setVideoInfo("");
      setLoading(true);
      setSearchVideos("");
      document.activeElement.blur();
      const videoInfo = await getVideoInfo(url);
      const id = regexYTvid(url);
      const thumbUrl = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
      setThumbnailUrl(thumbUrl);

      setVideoInfo(videoInfo);
      setVideoUrl(url);
      setLoading(false);
      setInputValue("");
      scrollToSong();
    } catch (error) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setLoading(false);
    }
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (inputValue.length < 1) {
      setError(true);
      return;
    }
    setLoading(false);
    setVideoInfo("");
    setSearchVideos("");
    // Check if input value matches the regex pattern for YouTube or YouTube Music

    if (
      inputValue.startsWith("https://www.youtube.com/") ||
      inputValue.startsWith("https://music.youtube.com/") ||
      inputValue.startsWith("youtube.com/") ||
      inputValue.startsWith("www.youtube.com/")
    ) {
      setLoading(true);
      // Logic if input value matches YouTube or YouTube Music regex
      try {
        const videoInfo = await getVideoInfo(inputValue);
        const video = videoInfo.video;
        for (let i = 4; i >= 0; i--) {
          if (video.thumbnails[i]) {
            const url = video.thumbnails[i].url.startsWith("//")
              ? `https:${video.thumbnails[i].url}`
              : video.thumbnails[i].url;
            setThumbnailUrl(url);
            break;
          }
        }
        setVideoInfo(videoInfo);
        setLoading(false);
        setVideoInfo(videoInfo);
        const url = `https://www.youtube.com/watch?v=${videoInfo.video.id}`;
        setVideoUrl(url);
        setInputValue("");
        scrollToSong();
        document.activeElement.blur();
      } catch (error) {
        setLoading(false);
      }
    } else if (inputValue.startsWith("https://" || "www.")) {
      toast.error(
        "Invalid Youtube Link. Please enter a valid youtube link and try again.",
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      setLoading(false);
    } else {
      setShowSkeletons(true);
      setKeywords(inputValue);
      const searchVideos = await getSearch(inputValue);
      setSearchVideos(searchVideos);
      setShowSkeletons(false);
      setLoading(false);
    }
  };
  const resetState = () => {
    setVideoInfo(null);
    setInputValue("");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="  md:w-[70vw] xl:w-[55vw] w-[85vw]">
      <div className="transition-all">
        <ScrollToTop
          smooth
          color="#ffffff"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            background: "#FF0000",
          }}
        />
      </div>

      <div className="flex flex-col justify-center content-center w-screen mt-4  ">
        <div className="flex justify-center content-center">
          <div className="flex flex-col justify-center content-center">
            <div className=" flex flex-col mx-auto  ">
              <form onSubmit={handleSearchClick} className="flex flex-col   ">
                <div className="flex flex-col   sm:flex-row  mx-auto  relative md:w-[70vw] xl:w-[45vw] w-[90vw]">
                  <div className="relative w-full">
                    <input
                      className={`bg-white border-solid   border-4 transition-all duration-200  placeholder:text-text/70   border-[#CBD5E1] text-base outline-none focus:border-primary1 appearance-none text-text py-3 px-4 w-full rounded-md duration-50`}
                      type="text"
                      placeholder={pholder}
                      value={inputValue}
                      autoComplete="off"
                      onClick={handleInputChange}
                      onPaste={handleInputPaste}
                      onChange={handleInputValue}
                    />

                    {inputValue.length > 0 && (
                      <div
                        onClick={() => {
                          setInputValue("");
                        }}
                        className="absolute hover:scale-105 transition-all bg-grey right-0 top-3 text-text text-xl flex justify-center items-center cursor-pointer rounded-md mr-4 w-10 h-8"
                      >
                        <RxCross2 />
                      </div>
                    )}
                  </div>
                  <div className="flex">
                    <button
                      disabled={loading}
                      className="bg-primary1 w-full text-white relative mt-4
                      sm:mt-0 hover:scale-105 transition-all text-base
                      text-black font-semibold px-6 py-3 sm:ml-2 rounded-md disabled:bg-primary1/60 disabled:hover:scale "
                    >
                      {loading
                        ? "Hmm..." // Todo: Change loading text
                        : "Search"}{" "}
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex mx-[1.19rem] sm:mx-0 mt-2 mb-4">
                <p className="text-text  ">
                  By using our service you accept our{" "}
                  <Link className="text-accent1 underline" href={"/tos"}>
                    Terms of Service
                  </Link>{" "}
                  &{" "}
                  <Link
                    className="text-accent1 underline"
                    href={"/privacy-policy"}
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading === true ? (
        <div className="flex flex-col justify-center content-center w-[100vw]  mt-10">
          <div className="flex content-center mx-auto justify-between">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#cf4a47"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div id={"song"} ref={songRef}>
        {videoInfo ? (
          <div className="flex flex-col justify-center content-center w-[100vw]  mt-10 sm:mt-6">
            <div className={"content-center mx-auto justify-between flex"}>
              <div className="mt-10 sm:hidden  "></div>

              <VideoCard
                videoInfo={videoInfo}
                resetState={resetState}
                url={videoUrl}
                mp3={mp3}
                thumbnailUrl={thumbnailUrl}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {searchVideos && (
        <div className="flex flex-col justify-center content-center w-[100vw]  mt-10 ">
          <div className="flex content-center mx-auto justify-between  ">
            <div className="mt-16 sm:hidden bg-secondary1 "></div>
            <SearchResults
              videos={searchVideos}
              keywords={keywords}
              setVideo={handleClickFromSearch}
              scrollToSong={scrollToSong}
            />
          </div>
        </div>
      )}
      {showSkeletons && (
        <div className="flex flex-col justify-center content-center w-[100vw]  mt-10 ">
          <div className="flex content-center mx-auto justify-between  ">
            <div className="mt-16 sm:hidden bg-secondary1 "></div>

            <SkeletonContainer keywords={keywords} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
