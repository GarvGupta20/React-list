//jshint esversion:6
import React, { useState } from "react";
import Title from "./components/Title.js";
import List from "./components/List.js";
import Input from "./components/Input.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  const handleonClick = (movie, show) => {
    //console.log("clicked");
    setMovies((prevstate) => {
      return [...prevstate, movie];
    });
    setShows((prevstate) => {
      return [...prevstate, show];
    });
  };

  //console.log(movies);
  //console.log(shows);

  const ondeleteClick = (index) => {
    //console.log("clicked delete");
    setMovies((prevstate) => {
      return prevstate.filter((_, m) => m !== index);
    });
    setShows((prevstate) => {
      return prevstate.filter((_, m) => m !== index);
    });
  };

  return (
    <div className="container">
      <Title />
      <List movies={movies} shows={shows} ondeleteClick={ondeleteClick} />
      <Input handleonClick={handleonClick} />
    </div>
  );
}

export default App;
