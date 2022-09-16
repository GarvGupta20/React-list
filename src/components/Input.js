//jshint esversion:6

import React, { useState } from "react";
const Input = ({ handleonClick }) => {
  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(null);

  const clicker = () => {
    handleonClick(movie, show);
    setMovie(null);
    setShow(null);
  };

  function onMovieChange(ev) {
    //  console.log(ev.target.value);
    setMovie(ev.target.value);
  }

  function onShowChange(ev) {
    //console.log(ev.target.value);
    setShow(ev.target.value);
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="movie-name">Movie</label>
        <input
          type="text-area"
          name="movie-name"
          onChange={onMovieChange}
          value={movie ? movie : ""}
        />
        <label htmlFor="show">Show</label>
        <input
          type="text-area"
          name="show"
          onChange={onShowChange}
          value={show ? show : ""}
        />
        <div className="container">
          <button type="button" onClick={clicker} className="some">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
