import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Modal from "./Modal";
import { Character } from "./CharacterList";

export default function NavBar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return <div className="navbar__logo">LOGO 🦠</div>;
}

export function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="text-field"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export function SearchResult({ numOfResult }) {
  return <div style={{ color: "white" }}> Found {numOfResult} characters </div>;
}

export function Favourites({ favourites, onDeleteFavourite }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal onOpen={setIsOpen} open={isOpen} title="List of Favourites">
        {favourites.map((item) => (
          <Character key={item.id} item={item}>
            <button
              className="icon red"
              onClick={() => onDeleteFavourite(item.id)}
            >
              <TrashIcon />
            </button>
          </Character>
        ))}
      </Modal>

      <button className="heart" onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon className="icon" />
        <span className="badge">{favourites.length}</span>
      </button>
    </>
  );
}
