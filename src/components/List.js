//jshint esversion:6

import React from "react";

const List = ( {movies,shows,ondeleteClick}  ) => {


  return (
    <>
    <div className="container">
      <ul>
       <h2>Movies</h2>
       {movies.map((val,index) => <li key={index}>{val}</li> )}

      </ul>
      <ul>
      <h2>Shows</h2>
       {shows.map((val,index) => <li key={index}>
              {val}
              <button type="button" className="another" onClick={() => ondeleteClick(index)}> Delete </button>
       </li> )}
      </ul>

    </div>
    </>
  );
};

export default List;
