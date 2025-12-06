import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Home } from "./pages/Home";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter basename="/Proyecto-Final-React/">
      <CartProvider>
        <Routes>

          {/* Layout principal */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Route>

          {/* Admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Login />} />
            <Route
              path="alta-productos"
              element={
                <RutaProtegida>
                  <ProductFormContainer />
                </RutaProtegida>
              }
            />
          </Route>

        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
