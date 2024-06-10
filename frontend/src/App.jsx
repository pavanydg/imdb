import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { MovieCard } from "./components/MovieCard";
import { MoviePage } from "./pages/MoviePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/movies/:id" element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
