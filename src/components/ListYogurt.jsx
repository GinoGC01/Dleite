import { CardYogurtType } from "./CardYogurtType.jsx";
import { useEffect, useState } from "react";
import products from "../../sources/products.json";
import "../styles/TypesYogures.css";

export function ListYogurt() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [left, setLeft] = useState(false);
  const [productos, setProductos] = useState([]);

  const ordenarStock = (arreglo) => {
    // Divide el arreglo en dos partes: en stock y no en stock
    const enStock = arreglo.filter((producto) => producto.stock);
    const noEnStock = arreglo.filter((producto) => !producto.stock);

    // Une las dos partes en una nueva matriz reordenada
    setProductos([...enStock, ...noEnStock]);
  };

  useEffect(() => {
    ordenarStock(products);
  }, []);

  const handleCardClick = (title) => {
    setSelectedCard(title === selectedCard ? null : title);
    setLeft(title !== selectedCard);
  };

  return (
    <ul className={left ? "yogurt-type open-yogurt-type" : "yogurt-type"}>
      {productos?.map((product) => {
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
            precioPorUnidad={product.precioUnidad}
            key={product.id}
          />
        );
      })}
    </ul>
  );
}
