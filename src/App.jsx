import React from "react";

function App() {
  const [imgSrc, setSrc] = React.useState("/load.png");

  React.useEffect(() => {
    handleImage();
  }, []);

  async function handleImage() {
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
  }

  async function handleGif() {
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
  }

  return (
    <>
      <div className="w-screen h-screen bg-red-100 flex justify-center items-center">
        <div className="flex flex-col bg-pink-100 gap-2 border-2 border-gray-400 max-h-screen rounded-md px-10 py-5 shadow-md hover:scale-105 duration-500">
          <p className="font-semibold text-gray-700 text-3xl">Cats 😺</p>
          <p className="font-semibold text-gray-500">
            Your daily dose of cats ✨
          </p>
          <img
            src={imgSrc}
            width={250}
            height={250}
            alt="cat image"
            className={"mx-auto mt-10 rounded-md"}
          />
          <div className="w-full justify-center items-center flex-row flex gap-2">
            <button
              onClick={handleGif}
              className="bg-blue-300 rounded-lg w-full hover:scale-105 duration-500 mt-8 py-2"
            >
              Gif 🖼
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

export default App;
