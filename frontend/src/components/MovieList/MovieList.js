import React, { useEffect, useState } from "react";
import "./MovieList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();

  const [movies, setMoives] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=f8970377bdfbe9424162a58b41448aca"
      )
      .then((res) => setMoives(res.data.results));
  }, []);

  const handleClick = (ele) => {
    console.log(ele);

    navigate("/movie", { state: ele });
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1400px",
        overflowX: "scroll",
        overflowY: "hidden",
        display: "flex",
        paddingTop: "20px",
      }}
      className="container"
    >
      {movies
        ? movies.map((ele, i) => {
            return (
              <div
                style={{
                  // backgroundColor: "crimson",
                  // margin: "auto",
                  width: "150px",
                  minWidth: "150px",
                  marginLeft: i === 0 ? "40px" : "20px",
                  // marginLeft: "20px"
                }}
                key={i}
                className="card_style_1"
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/` + ele.poster_path}
                    width="150px"
                    height="225px"
                    style={{ borderRadius: "8px", cursor: "pointer" }}
                    onClick={() => handleClick(ele)}
                    alt={ele.original_name}
                  />
                </div>
                <div
                  style={{ padding: "30px 10px 10px", position: "relative" }}
                >
                  <div
                    style={{
                      backgroundColor: "#222",
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "-19px",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      fontSize: "0.7em",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {ele.vote_average}
                    </span>
                  </div>
                  <p
                    style={{ fontSize: "14px", fontWeight: "bold", margin: 0 }}
                  >
                    {ele.title ? ele.title : ele.original_name}
                  </p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default MovieList;
