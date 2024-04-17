import { useState } from "react";
import "animate.css";
import "../styles/CardType.css";

export function CardYogurtType({
  flag,
  title,
  descripcion,
  cantidad,
  adicionales,
  stock,
  image,
}) {
  const [open, setOpen] = useState(false);
  const [medida, setMedida] = useState(0);
  const [selected, setSelected] = useState(false);
  const [peso, setPeso] = useState(200);
  const [tipo, setTipo] = useState(null);

  const handleMedida = (index) => {
    if (index == 0) {
      setMedida(0);
      setSelected(index);
      setPeso(200);
    } else if (index == 1) {
      setMedida(1);
      setSelected(index);
      setPeso(500);
    } else {
      setMedida(2);
      setSelected(index);
      setPeso(1000);
    }
  };

  const handleOpenCard = () => {
    setOpen(!open);
    setTipo(title);
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
          <div className="img-container">
            <img
              src={
                (medida == 0 && image[0]) ||
                (medida == 1 && image[1]) ||
                (medida == 2 && image[2])
              }
              alt={title}
              className="yogurt-image"
            />
          </div>
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
                    <li
                      key={index}
                      onClick={() => {
                        handleMedida(index);
                      }}
                      className={
                        index === selected ? "medida selected" : "medida"
                      }
                    >
                      {medida} {cantidad.unidad}
                    </li>
                  );
                })}
              </ul>
              <ul>
                <h3>Adicionales:</h3>
                {adicionales.map((adicional, index) => {
                  return (
                    <li key={index} className="aditionals">
                      {adicional}
                    </li>
                  );
                })}
              </ul>
            </div>
            <a
              className={stock ? "lo-quiero-a" : "disabled"}
              href={`https://api.whatsapp.com/send?phone=541140230671&text=Hola!%20deseo%20información%20acerca%20del%20yogurt%20${tipo}%20de%20${peso}%20gr.`}
            >
              Lo quiero!
            </a>
          </div>
        </li>
      )}
    </>
  );
}
