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
                        <div className="text-center">
                            <Button variant="outline-primary">
                                <Link to={`/Item/${item.id}`}>
                                    Ver detalle del producto
                                </Link>
                            </Button>
                        </div>
                    </Card.Text>
                </Card.Body>
                {/* <Card.Footer>Stock disponible: 17</Card.Footer> */}
                {/* <Link to={`/Item/${item.id}`}>Ver detalle del producto</Link> */}
            </Card>
        </>
    );
};
export default Item;
