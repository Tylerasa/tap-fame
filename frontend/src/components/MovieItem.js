import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const MovieItem = () => {
  const location = useLocation();
  console.log("movie item", location.state);
  const [movie, setMoive] = useState(location.state);
  const [comment, setComment] = useState("");
  const handleSubmit = () => {
      var item = {
          comment,
          title: movie. movie.original_name,
          synposis: movie.overview,
          rating: movie.vote_average
      }
      axios.post("")
  };
  return (
    <div>
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
          position: "absolute",
          left: "10%",
          top: "20%",
          borderRadius: "8px",
        }}
      />
      <h2 style={{ marginTop: "90px", textAlign: "center" }}>
        {movie.title ? movie.title : movie.original_name}
      </h2>
      <p
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        {movie.overview}
      </p>
      <h3 style={{ textAlign: "center" }}>Post Your Review Here 👇🏾</h3>
      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <textarea
          onChange={(e) => setComment(e.target.value)}
          style={{
            display: "block",
            padding: "10px 5px",
            width: "100%",
            borderRadius: "10px",
            fontSize: "16px",
            outline: "#ddd",
            fontFamily: "Inter",
          }}
          type="text"
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        <span
          onClick={handleClick}
          style={{
            backgroundColor: "#111",
            padding: "8px 20px",
            color: "white",
            borderRadius: "18px",
            textAlign: "center",
          }}
        >
          Submit
        </span>
      </div>
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
