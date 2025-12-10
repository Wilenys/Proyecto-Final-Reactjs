import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const URL = "https://6930ea5d11a8738467cc9512.mockapi.io/products";

    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error al buscar productos");
        return res.json();
      })
      .then((data) => {
        
        if (categoryId === "articulos") {
          setProductos(data);
          return;
        }

        
        if (categoryId) {
          const filtrados = data.filter(
            (prod) =>
              prod.category?.toLowerCase() === categoryId.toLowerCase()
          );
          setProductos(filtrados);
        } else {
          setProductos(data);
        }
      })
      .catch((err) => console.error("Error al cargar productos:", err));
  }, [categoryId]);

  return (
    <section>
      <ItemList lista={productos} />
    </section>
  );
};
