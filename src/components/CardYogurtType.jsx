import React, { useState } from "react";
import "animate.css";
import "../styles/CardType.css";

export function CardYogurtType({
  flag,
  title,
  descripcion,
  cantidad,
  adicionales,
  stock,
}) {
  const [open, setOpen] = useState(false);

  const handleOpenCard = () => {
    setOpen(!open);
  };
  return (
    <>
      <li className="cardtype-container" onClick={handleOpenCard}>
        <span
          className={
            stock
              ? "stock-bullet-on stock-bullet"
              : "stock-bullet-off stock-bullet"
          }
        ></span>
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
      </li>

      {open && (
        <li className="animate__animated animate__bounceIn Card-description-container">
          <div className="title">
            <h3>Yogurt {title}</h3>
            {flag != "" && <img src={flag} alt={title} className="flag" />}
          </div>
          <img src="../../../OIP.jpeg" alt={title} className="yogurt-image" />
          <span className={stock ? "stock" : "no-stock"}>
            {stock ? "Disponible" : "No disponible"}
          </span>
          <div className="Card-text-button-container">
            <p>{descripcion}</p>
            <div className="details">
              <ul>
                <h3>Cantidades:</h3>
                {cantidad.medida.map((medida, index) => {
                  return (
                    <li key={index}>
                      {medida} {cantidad.unidad}
                    </li>
                  );
                })}
              </ul>
              <ul>
                <h3>Adicionales:</h3>
                {adicionales.map((adicional, index) => {
                  return <li key={index}>{adicional}</li>;
                })}
              </ul>
            </div>
            <a href="#">Lo quiero!</a>
          </div>
        </li>
      )}
    </>
  );
}
