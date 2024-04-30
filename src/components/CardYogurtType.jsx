import { useState } from "react";
import "animate.css";
import "../styles/CardType.css";
import { DobleArrow } from "../icons/DobleArrow";
import { TEXT, PHONE } from "../../constants/whatsappMessages";

export function CardYogurtType({
  flag,
  title,
  descripcion,
  cantidad,
  adicionales,
  stock,
  image,
  isOpen,
  handCard,
}) {
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
    handCard();
    setTipo(title);
  };

  return (
    <>
      <li
        className={
          !isOpen
            ? "cardtype-container"
            : "cardtype-container cardtype-container-open"
        }
        onClick={handleOpenCard}
      >
        <span
          className={
            stock
              ? "stock-bullet-on stock-bullet"
              : "stock-bullet-off stock-bullet"
          }
        ></span>

        {stock == false && <span className="proximamente">proximamente</span>}
        <strong className="title-card">{title}</strong>
        <span
          className={
            !isOpen
              ? "material-symbols-outlined icon-card"
              : "material-symbols-outlined icon-card open"
          }
        >
          expand_more
        </span>
      </li>

      {isOpen && (
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
            {stock ? "Disponible" : "Proximamente"}
          </span>
          <div className="Card-text-button-container">
            <p>{descripcion}</p>
            <div className="details">
              <div className="cantidades-container">
                <h3>Cantidades:</h3>
                <ul>
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
                        {medida === 1000 ? 1 : medida}{" "}
                        {medida === 1000 ? "kilo" : "grs"}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="adicionales-container">
                <h3>Adicionales:</h3>
                <ul>
                  {adicionales.length != 0 ? (
                    adicionales.map((adicional, index) => {
                      return (
                        <li key={index} className="aditionals">
                          {adicional}
                        </li>
                      );
                    })
                  ) : (
                    <li key="Preparar-a-gusto" className="aditionals">
                      Preparar a gusto!
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <a
              className={stock ? "lo-quiero-a" : "disabled"}
              href={`https://api.whatsapp.com/send?phone=${PHONE}&text=${TEXT(
                tipo,
                peso
              )}`}
              title={`Comprar yogurt tipo ${tipo} de ${peso} gr.`}
            >
              Lo quiero!
              <DobleArrow />
            </a>
          </div>
        </li>
      )}
    </>
  );
}
