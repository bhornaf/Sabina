import { Link } from "react-router-dom";
import { Card, Button, Image } from "react-bootstrap";
const Item = ({ item }) => {
    return (
        <>
            <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                    <Image src={item.image} alt={item.title} fluid />
                    <Card.Text>
                        <Button variant="outline-primary">
                            <Link to={`/Item/${item.id}`}>
                                Ver detalle del producto
                            </Link>
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};
export default Item;
