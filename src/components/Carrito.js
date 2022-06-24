import { Link } from "react-router-dom";

const Carrito = (props) => {
    // const { carrito, total, handleDelete, handlePlus, handleMinus } = props;
    return (
        <div className="carrito">
            <h1>Carrito</h1>
            <Link to="/checkout">Proceder con la compra</Link>
            {/* <ul>
                {carrito.map((producto, index) => (
                    <li key={index}>
                        <p>{producto.nombre}</p>
                        <p>{producto.precio}</p>
                        <button onClick={() => handleDelete(index)}>X</button>
                        <button onClick={() => handlePlus(index)}>+</button>
                        <button onClick={() => handleMinus(index)}>-</button>
                    </li>
                ))}
            </ul>
            <p>Total: {total}</p> */}
        </div>
    );
};

export default Carrito;
