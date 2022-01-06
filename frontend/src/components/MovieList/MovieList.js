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
              <div style={{ backgroundColor: "crimson", margin: "auto" }} key={i}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/` + ele.poster_path}
                  width="150px"
                  height="225px"
                  style={{borderRadius: "8px"}}
                />
                <p style={{fontSize: "14px", fontWeight: "bold"}}>{ele.title}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default MovieList;
