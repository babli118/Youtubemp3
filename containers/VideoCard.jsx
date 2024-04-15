import React, { useState } from "react";
import { useRouter } from "next/navigation.js";
import Image from "next/image";
import getVideoDlLink from "../utils/getVideoDlLink.js";
import getAudioDlLink from "../utils/getAudioDlLink.js";
import DisplayDuration from "../utils/DurationDisplay.js";
import { TailSpin } from "react-loader-spinner";
const VideoCard = ({ videoInfo, url, mp3, thumbnailUrl }) => {
  const router = useRouter();
  const { video } = videoInfo;
  const [loadingMp3, setLoadingMp3] = useState(false);
  const [loadingMp4, setLoadingMp4] = useState(false);
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  const getVideoLink = async (url) => {
    try {
      const dlLinkInfo = await getVideoDlLink(url);

      const dlLink = dlLinkInfo.dlLink.url;
      router.push(dlLink);
      setOpen(true);
    } catch (error) {}
  };

  const getAudioLink = async (url) => {
    try {
      const dlLinkInfo = await getAudioDlLink(url);
      const dlLink = dlLinkInfo.dlLink.url;

      router.push(dlLink);
      setOpen(true);
    } catch (error) {}
  };

  function truncateTitle(title, maxWords) {
    const words = title.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return title;
    }
  }

  return (
    <div className="flex flex-col justify-center  items-center   ">
      <div
        style={{
          width: "360px",
          borderWidth: "2px",
          borderColor: "#E5E7EB",
          borderStyle: "solid",
        }}
        className="bg-white  thumbnail justify-center items-center  border-solid flex flex-row rounded-md shadow-sm "
      >
        <div className="flex flex-col ">
          <div className="flex justify-center items-center relative transition-all">
            <div
              style={{
                width: "357.5px",
                height: "200px",
                position: "relative",
              }}
            >
              <Image
                alt="thumbnail of video"
                src={thumbnailUrl}
                fill
                priority
                className={`rounded-md transition-all ${
                  isThumbnailLoaded ? "opacity-100" : "opacity-0"
                }`} // Apply opacity based on loaded state
                onLoad={() => setIsThumbnailLoaded(true)} // Set loaded state to true when the image is loaded
              />
            </div>

            <div
              style={{
                position: "absolute",
                right: "10px",
                bottom: "4px",
                background: "#080B0D",
                opacity: 0.9,
                padding: "0 8px",
              }}
              className="font-medium  bg-[#080B0D] text-white rounded-md "
            >
              <DisplayDuration durationInSeconds={video.duration} />
            </div>
          </div>
          <div className="flex  mb-4 ">
            <div>
              <div className="my-2">
                <p
                  style={{ margin: "0 1rem" }}
                  className="text-base text-text font-bold  "
                >
                  {truncateTitle(video.title, 8)}
                </p>
                <div
                  style={{ marginTop: "0.3rem" }}
                  className="mx-2  flex  items-center"
                >
                  <Image
                    className="mx-2"
                    style={{ borderRadius: "999px" }}
                    alt="channel logo"
                    width={25}
                    height={20}
                    src={
                      video.channelThumbnails[0].url
                        ? video.channelThumbnails[0].url
                        : video.channelThumbnails[1].url
                    }
                  />
                  <p
                    style={{ color: "rgb(22 19 19 / 0.7)" }}
                    className="text-sm font-semibold t"
                  >
                    {video.channel}
                  </p>
                </div>
              </div>

              <div style={{ color: "rgb(22 19 19 / 0.7)" }}>
                <div style={{ margin: "0 1rem" }} className="flex gap-2 ">
                  <p>Audio Quality</p>
                  <p className="font-semibold ">192kbps</p>
                </div>
                <div style={{ margin: "0 1rem" }} className="flex gap-2 mx-4">
                  <p>Video Quality</p>
                  <p className="font-semibold ">720p</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          style={{
            height: "50px",
            width: "160px",
            fontWeight: "500",
          }}
          onClick={async () => {
            setLoadingMp3(true);
            await getAudioLink(url);
            setLoadingMp3(false);
          }}
          className="bg-primary1 flex mt-2 w-[300px]  justify-center items-center gap-2 text-white text-center relative hover:scale-105 px-4  py-3 transition-all text-base font-semibold   rounded-md"
        >
          {loadingMp3 ? (
            <TailSpin color="#fff" height={30} width={30} />
          ) : (
            <>
              <span>Download</span> <span>MP3</span>
            </>
          )}
        </button>
        <button
          style={{
            height: "50px",
            width: "160px",
            fontWeight: "500",
            backgroundColor: "#3F83F8",
          }}
          onClick={async () => {
            setLoadingMp4(true);
            await getVideoLink(url, 720);
            setLoadingMp4(false);
          }}
          className=" flex mt-2 justify-center items-center gap-2 text-white text-center relative hover:scale-105 px-4  py-3 transition-all text-base font-semibold    rounded-md"
        >
          {loadingMp4 ? (
            <TailSpin color="#fff" height={30} width={30} />
          ) : (
            <>
              <span>Download</span> <span>MP4</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
