"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  const [imgSrc, setSrc] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    handleImage();
  }, []);

  async function handleImage() {
    setLoading(true);

    const response = await fetch("https://cataas.com/cat?json=true", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    setSrc("https://cataas.com" + data.url);
    setLoading(false);
  }

  async function handleGif() {
    setLoading(true);

    const response = await fetch("https://cataas.com/cat/gif?json=true", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    setSrc("https://cataas.com" + data.url);
    setLoading(false);
  }

  return (
    <>
      <div className="w-screen h-screen bg-red-100 flex justify-center items-center">
        <div className="flex flex-col bg-pink-100 gap-2 border-2 border-gray-400 max-h-screen rounded-md px-10 py-5 shadow-md hover:scale-105 duration-500">
          <p className="font-semibold text-gray-700 text-3xl">Cats 😺</p>
          <p className="font-semibold text-gray-500">
            Your daily dose of cats ✨
          </p>
          <div className="flex justify-center items-center">
            {loading ? (
              <Spinner />
            ) : (
              <Image
                src={imgSrc}
                width={250}
                height={250}
                alt="cat image"
                className={"mx-auto mt-7 rounded-md"}
              />
            )}
          </div>
          <div className="w-full justify-center items-center flex-row flex gap-2">
            <button
              onClick={handleGif}
              className="bg-blue-300 rounded-lg w-full hover:scale-105 duration-500 mt-8 py-2"
            >
              Gif 📺
            </button>
            <button
              onClick={handleImage}
              className="bg-blue-300 rounded-lg w-full hover:scale-105 duration-500 mt-8 py-2"
            >
              Next ⏩
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const Spinner = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-12 h-12 mr-2 text-red-200 animate-spin fill-red-400"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
