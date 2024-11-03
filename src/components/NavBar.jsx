import React, { useState } from "react";

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
  return <div className="navbar_result"> Found {numOfResult} characters </div>;
}

export function Favourites({ favourites, onDeleteFavourite }) {
  const [isOpen, setIsOpen] = useState(false);
}
