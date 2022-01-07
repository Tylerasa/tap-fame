import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieItem from "./components/MovieItem";
function App() {
  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie" element={<MovieItem />} />
      </Routes>
    </Router>
  );
}

export default App;
