import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { context } from "../CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [purchase, setPurchase] = useState("");
    const { cart, total, clearCart } = useContext(context);

    const handleBuy = () => {
        const collectionProductos = collection(db, "ordenes");
        const productos = {
            buyer: {
                name: "Estuar",
                phone: "123456789",
                email: "bhornaf93@gmail.com",
            },
            items: [...cart],
            date: serverTimestamp(),
            total: total,
        };

        const consulta = addDoc(collectionProductos, productos);
        consulta
            .then((result) => {
                setPurchase(result.id);
                clearCart();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <h1>Checkout</h1>
            {purchase ? <h2>Tu Orden es #{purchase}</h2> : ""}
            {purchase ? "" : <p>Total: ${total}</p>}
            {purchase ? (
                <Link to="/">
                    <button className="btn btn-primary">Catalogo</button>
                </Link>
            ) : (
                <button className="btn btn-success" onClick={handleBuy}>
                    Comprar
                </button>
            )}
        </div>
    );
};
export default Checkout;
