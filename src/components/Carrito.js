import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../CartContext";

const Carrito = () => {
    const { cart, removeItem, clearCart } = useContext(context);

    return (
        <>
            <h1>Carrito</h1>
            <div className="cart container">
                {cart.length > 0 ? (
                    <>
                        <h2>{cart.length} productos</h2>
                        <ul className="list-group">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    <span>{item.title}</span>
                                    <span>${item.price}</span>
                                    <span> {item.quantity} </span>
                                    <Link
                                        to={`/Item/${item.id}`}
                                        className="btn btn-primary"
                                    >
                                        Ver
                                    </Link>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>
                                Total: $
                                {cart.reduce((total, item) => {
                                    return total + item.price * item.quantity;
                                }, 0)}
                            </span>
                            <button
                                className="btn btn-danger"
                                onClick={() => clearCart()}
                            >
                                Vaciar carrito
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2>No hay productos en el carrito</h2>
                        <Link to="/">
                            <button className="btn btn-primary">
                                Volver a la tienda
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </>
    );
};

export default Carrito;
