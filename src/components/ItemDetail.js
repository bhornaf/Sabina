import { useState, useContext } from "react";
import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { context } from "../CartContext";

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState([]);
    const result = useContext(context);

    console.log(result);

    const onAdd = (count) => {
        console.log(result);

        result.addItem(item, count);
        setCount(count);
    };

    return (
        <>
            <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                    <Image src={item.image} alt={item.title} fluid />
                    <Card.Text>{item.description}</Card.Text>
                    Precio {item.price}
                </Card.Body>
                <Card.Body>
                    {count.length <= 0 ? (
                        <ItemCount stock={12} initial={1} onAdd={onAdd} />
                    ) : (
                        <Button variant="outline-primary">
                            <Link to="/car">Ver carrito</Link>
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

export default ItemDetail;
