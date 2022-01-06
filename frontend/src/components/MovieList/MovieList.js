import React, { useEffect, useState } from "react";
import "./MovieList.css";
import axios from "axios";

const MovieList = () => {
  const [movies, setMoives] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=f8970377bdfbe9424162a58b41448aca"
      )
      .then((res) => setMoives(res.data.results));
  }, []);
  return (
    <div className="grid-container">
      {movies
        ? movies.map((ele, i) => {
            return (
              <div style={{backgroundColor: "crimson"}} key={i} className="div1">
                {ele.title}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default MovieList;
