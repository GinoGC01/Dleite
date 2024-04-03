import React, { useState } from "react";
import "animate.css";
import "../styles/CardType.css";

export function CardYogurtType({ title, descripcion }) {
  const [open, setOpen] = useState(false);

  const handleOpenCard = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="cardtype-container" onClick={handleOpenCard}>
        <strong className="title-card">{title}</strong>
        <span
          className={
            !open
              ? "material-symbols-outlined icon-card"
              : "material-symbols-outlined icon-card open"
          }
        >
          expand_more
        </span>
      </div>

      {open && (
        <div className="animate__animated animate__bounceIn Card-description-container">
          <h3>Yogurt {title}</h3>
          <img src="../../../OIP.jpeg" alt={title} />
          <div className="Card-text-button-container">
            <p>{descripcion}</p>
            <button>Lo quiero!</button>
          </div>
        </div>
      )}
    </>
  );
}
