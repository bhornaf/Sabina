import { Link } from "react-router-dom";

const Carrito = (props) => {
    return (
        <>
            <div className="carrito">
                <h1>Carrito</h1>
                <Link to="/checkout">Proceder con la compra</Link>
            </div>
        </>
    );
};

export default Carrito;
