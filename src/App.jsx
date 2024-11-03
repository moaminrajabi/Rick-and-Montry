import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import NavBar, { Favourites, Search } from "./components/NavBar";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favourites, setFavourites] = useLocalStorage("FAVOURITES", []);

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);
    // return function(){}
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const handleSelectCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleDeleteFavourite = (id) => {
    setFavourites((prevFav) =>
      prevFav.filter((fav) => fav.id).includes(selectedId)
    );
  };

  return (
    <div className="app">
      <Toaster />
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <Favourites
          favourites={favourites}
          onDeleteFavourite={handleDeleteFavourite}
        />
      </NavBar>
      <Main>
        
      </Main>
    </div>
  );
}

export default App;
