import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const URL = `https://6930ea5d11a8738467cc9512.mockapi.io/products/${id}`;

    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error al buscar producto");
        return res.json();
      })
      .then((data) => setProducto(data))
      .catch((err) => console.error("Error al cargar producto:", err));
  }, [id]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
};
