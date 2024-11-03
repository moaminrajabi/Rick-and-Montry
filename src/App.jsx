import React, { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import NavBar, { Favourites, Search, SearchResult } from "./components/NavBar";
import useLocalStorage from "./hooks/useLocalStorage";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import useCharacter from "./hooks/useCharacter";

function App() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const { characters, isLoading } = useCharacter(
    "https://rickandmortyapi.com/api/character/?name",
    query
  );
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

  const handleAddFavourite = (char) => {
    setFavourites((preFav) => [...preFav, char]);
  };

  const handleDeleteFavourite = (id) => {
    setFavourites((prevFav) =>
      prevFav.filter((fav) => fav.id).includes(selectedId)
    );
  };

  const isAddToFavourite = favourites.map((fav) => fav.id).includes(selectedId);

  return (
    <div className="app">
      <Toaster />
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult  numOfResult={characters.length} />
        <Favourites
          favourites={favourites}
          onDeleteFavourite={handleDeleteFavourite}
        />
      </NavBar>
      <Main>
        <CharacterList
          selectedId={selectedId}
          characters={characters}
          isLoading={isLoading}
          onSelectCharacter={handleSelectCharacter}
        />
        <CharacterDetail
          selectedId={selectedId}
          onAddFavourite={handleAddFavourite}
          isAddToFavourite={isAddToFavourite}
        />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
