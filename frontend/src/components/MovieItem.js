import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StarRating from "react-svg-star-rating";

const MovieItem = () => {
  const location = useLocation();
  const [movie, setMoive] = useState(location.state);
  const [comment, setComment] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const handleRating = (rating) => {
    setMovieRating(rating);
  };

  const handleSubmit = () => {
    var item = {
      comment,
      title: movie.original_name,
      synposis: movie.overview,
      rating: movieRating || movie.vote_average,
      reviewed: true,
      release_date: movie.first_air_date,
    };
    console.log(item);
    axios.post("/api/movies/", item).then((res) => console.log(res));
  };

  useEffect(() => {});
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StarRating count={10} unit="float" handleOnClick={handleRating} />{" "}
        {movieRating}
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
          onClick={handleSubmit}
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
