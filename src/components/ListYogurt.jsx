import { CardYogurtType } from "./CardYogurtType.jsx";
import { useState } from "react";
import products from "../../sources/products.json";
import "../styles/TypesYogures.css";

export function ListYogurt() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [left, setLeft] = useState(false);

  const handleCardClick = (title) => {
    setSelectedCard(title === selectedCard ? null : title);
    setLeft(title !== selectedCard);
  };

  return (
    <ul className={left ? "yogurt-type open-yogurt-type" : "yogurt-type"}>
      {products?.map((product) => {
        return (
          <CardYogurtType
            flag={product.flag}
            title={product.tipo}
            descripcion={product.descripcion}
            cantidad={product.cantidad}
            adicionales={product.adicionales}
            stock={product.stock}
            image={product.imagen}
            isOpen={product.tipo === selectedCard}
            handCard={() => handleCardClick(product.tipo)}
            key={product.id}
          />
        );
      })}
    </ul>
  );
}
