import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import StarRating from "react-svg-star-rating";

const MovieItem = () => {
  const location = useLocation();
  const [movie, setMoive] = useState(location.state);
  const [comment, setComment] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const [movieComments, setMovieComments] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [iniRating, setIntiRating] = useState(0);

  const textArea = useRef();
  const submitButton = useRef();

  const handleRating = (rating) => {
    setMovieRating(rating);
  };

  const handleSubmit = () => {
    var item = {
      comment,
      title: movie.title || movie.original_name,
      synopsis: movie.overview,
      rating: movieRating || movie.vote_average,
      reviewed: true,
      release_date: movie.release_date || movie.first_air_date,
      your_rating: movie.vote_average,
    };

    // console.log(item);
    axios.post("/movies/add", item).then((res) => setSubmitted(!submitted));
    textArea.current.value = "";
    textArea.current.focus();
    setMovieRating(0);
    setIntiRating(0);
  };

  useEffect(() => {
    axios.get(`/movies/movie/${location.state.original_name}`).then((res) => {
      setMovieComments(res.data);
      console.log(res.data);
    });
  }, [submitted]);
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
        alt={movie.original_name}
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

      <h2 style={{ textAlign: "center" }}>Reviews</h2>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        {movieComments.length > 0 ? (
          movieComments.map((ele) => {
            return (
              <p style={{ textAlign: "center" }} key={ele._id}>
                {ele.comment},{" "}
                <i style={{ fontSize: "smaller", color: "#555" }}>
                  {ele.updatedAt}
                </i>
              </p>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>No Reviews Yet</p>
        )}
      </div>

      <h3 style={{ textAlign: "center" }}>Post Your Review Here 👇🏾</h3>
      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <textarea
          ref={textArea}
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
        <StarRating
          count={10}
          unit="float"
          handleOnClick={handleRating}
          initialRating={movieRating}
        />{" "}
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
          ref={submitButton}
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
