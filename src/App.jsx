import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import NavBar, { Favourites, Search } from "./components/NavBar";

function App() {
  const [query, setQuery] = useState("");
  const [favourites , setFavourites] =
  return (
    <div className="app">
      <Toaster />
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <Favourites />
      </NavBar>
    </div>
  );
}

export default App;
