import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList/MovieList";

function App() {
  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <MovieList />
    </div>
  );
}

export default App;
