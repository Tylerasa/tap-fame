import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const MovieItem = () => {
  const location = useLocation();
  console.log("movie item", location.state);
  const [movie, setMoive] = useState(location.state);
  return (
    <div
    //   style={{ paddingTop: "20px" }}

    // className="container"
    >
      <div
        style={{
          margin: "auto",
          display: "block",
          height: "50vh",
          backgroundImage:
            "url(" +
            "https://image.tmdb.org/t/p/original/" +
            `${movie.backdrop_path}` +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(2px)",
        }}
      ></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
        width="200px"
        style={{
          position: "abolute",
          left: "10%",
          top: "20%",
          borderRadius: "8px",
        }}
      />
      <h2 style={{ marginTop: "90px", textAlign: "center" }}>{movie.title}</h2>
      <p style={{
          padding: "20px",
          textAlign:"center"
      }}>{movie.overview}</p>
      {/* <div
        style={{
          margin: "auto",
          display: "block",
          height: "50vh",
          backgroundImage:
            "url(" +
            "https://image.tmdb.org/t/p/original/" +
            `${movie.backdrop_path}` +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(100px)",
        }}
      ></div> */}
    </div>
  );
};

export default MovieItem;
