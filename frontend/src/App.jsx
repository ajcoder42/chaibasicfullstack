import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>chai aur fullstack</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.joke}</p>
          </div>
        );
      })}
    </>
  );
};

export default App;
