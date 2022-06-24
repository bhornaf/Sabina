import { useState } from "react";
import { Card, Button, InputGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState([]);

    const onAdd = (count) => {
        setCount(count);
        console.log("Agregar al carrito " + count);
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
                <Card.Footer>
                    {count.length <= 0 ? (
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    ) : (
                        <Button variant="outline-primary">
                            <Link to="/car">Ver carrito</Link>
                        </Button>
                    )}
                </Card.Footer>
            </Card>
        </>
    );
};

export default ItemDetail;
