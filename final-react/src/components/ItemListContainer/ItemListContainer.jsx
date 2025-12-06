import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // 👉 MUY IMPORTANTE para GitHub Pages
    const url = `${import.meta.env.BASE_URL}data/productos.json`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar los productos");
        }
        return res.json();
      })
      .then((data) => {
        // 👉 Ajustar URLs de imágenes
        const productosConImagen = data.map((p) => ({
          ...p,
          imageUrl: `${import.meta.env.BASE_URL}${p.imageUrl}`,
        }));

        // 👉 Filtrar por categoría (si está)
        if (categoryId) {
          const filtrados = productosConImagen.filter(
            (prod) => prod.category === categoryId
          );
          setProductos(filtrados);
        } else {
          // 👉 Si NO hay categoría, mostrar todos
          setProductos(productosConImagen);
        }
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
      });
  }, [categoryId]);

  return (
    <section>
      <ItemList lista={productos} />
    </section>
  );
};

