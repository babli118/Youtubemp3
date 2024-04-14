import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import { startDownload } from "../utils";

const getVideoDlLink = async (format) => {
  const url =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be&t=30s";

  let videoId;
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts|music|watch\?[^&]*v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})/i;
  const match = url.match(regExp);

  if (match && match[1]) {
    videoId = match[1];
  } else {
    console.log("Failed to extract video ID from URL");
  }

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
    console.log(e);
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
