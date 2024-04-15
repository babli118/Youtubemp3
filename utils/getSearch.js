import { toast } from "react-toastify";

const getVideoInfo = async (inputValue) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({ searchWords: inputValue }),
    };

    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URl}/search`;

    const videoFetch = await fetch(url, options);
    const videoInfo = await videoFetch.json();

    return videoInfo;
  } catch (error) {
    toast.error("Unable to load videos videos, please try again. ", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return;
  }
};

export default getVideoInfo;
