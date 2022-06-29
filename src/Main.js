import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/category/:category"
                    element={<ItemListContainer />}
                />
                <Route path="/Item/:id" element={<ItemDetailContainer />} />
                <Route path="/Car" element={<Carrito />} />
                <Route path="/Checkout" element={<Checkout />} />
            </Routes>
        </main>
    );
};

export default Main;
