import { useState } from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const IncrementCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const DecrementCount = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    const confirmAdd = (e) => {
        onAdd(count);
    };

    return (
        <>
            <Card className="text-center" style={{ width: "16rem" }}>
                <Card.Body>
                    {/* <Card.Title>Camisa tiger</Card.Title> */}
                    <Card.Text>
                        <InputGroup className="mb-3">
                            <Button variant="primary" onClick={IncrementCount}>
                                +
                            </Button>
                            <FormControl
                                className="text-center"
                                aria-label="Text input with dropdown button"
                                value={count}
                            />
                            <Button variant="danger" onClick={DecrementCount}>
                                -
                            </Button>
                        </InputGroup>
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="outline-primary" onClick={confirmAdd}>
                            Agregar al carrito
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ItemCount;
