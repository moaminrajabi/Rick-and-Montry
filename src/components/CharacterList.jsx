import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Loader from "./Loader";

function CharacterList({
  selectedId,
  characters,
  isLoading,
  onSelectCharacter,
}) {
  if (isLoading)
    return (
      <div className="characters-list">
        <Loader />
      </div>
    );

  return (
    <div className="characters-list">
      {characters.map((item) => (
        <Character key={item.id} item={item}>
          <button
            className="icon red"
            onClick={() => onSelectCharacter(item.id)}
          >
            {selectedId === item.id ? <EyeSlashIcon /> : <EyeIcon />}
          </button>
        </Character>
      ))}
    </div>
  );
}

export default CharacterList;

export function Character({ item, children }) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.name} />
      <CharaterName item={item} />
      <CharacterInfo item={item} />
      {children}
    </div>
  );
}

function CharaterName({ item }) {
  return (
    <h3 className="name">
      <span>{item.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦳"}</span>
      <span> {item.name}</span>
    </h3>
  );
}

function CharacterInfo({ item }) {
  return (
    <div className="list-item__info info">
      <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
      <span> {item.status} </span>
      <span> - {item.species}</span>
    </div>
  );
}

// render logic : => pure render logic !!!
// do not perform network req.
// do not create time
// do not access DOM API ...
// do not mutate object, state, props !
