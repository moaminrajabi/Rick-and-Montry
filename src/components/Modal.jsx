import { title } from "process";
import React from "react";

function Modal({ open, onOpen, title, children }) {
  if (!open) return null;
  return (
    <div>
      <div className="backdrop" onClick={() => onOpen(false)}></div>
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Modal;
