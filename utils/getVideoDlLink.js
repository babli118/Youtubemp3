import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import { startDownload } from "../utils";
import { regexYTvid } from "../utils.jsx";

const getVideoDlLink = async (url) => {
  let videoId;
  videoId = regexYTvid(url);
  try {
    const res = await fetch(`https://v4.mp3youtube.cc/api/converter`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        accept: "*/*",
      },
      body: `link=https://www.youtube.com/watch?v=${videoId}&format=mp4`,
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
      showToast("Something went wrong");
    }

    const data = await res.json();

    startDownload(data.url);
  } catch (e) {
    showToast("Something went wrong");
  }
};
const showToast = (msg) => {
  toast.error(msg, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export default getVideoDlLink;
