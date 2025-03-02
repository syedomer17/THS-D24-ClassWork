import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState(null);
  const categories = [
    "Programming",
    "Dark",
    "Pun",
    "Spooky",
    "political",
    "Christmas",
    "Misc",
  ];


  const fetchJoke = async (category) => {
    const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`);
    setJokes(response.data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold mb-6">Jokes App</h1>
      <div className="flex space-x-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => fetchJoke(category)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg transition"
          >
            {category}
          </button>
        ))}
      </div>
      {jokes && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg text-center w-96">
          {jokes.type === "twopart" ? (
            <>
              <p className="text-lg font-semibold">{jokes.setup}</p>
              <p className="text-md mt-2 text-blue-300">{jokes.delivery}</p>
            </>
          ) : (
            <p className="text-lg font-semibold">{jokes.joke}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
