import { Card, Button, InputGroup, Image } from "react-bootstrap";
const ItemDetail = ({item}) => {
    return (
        <>
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                    <Image src={item.image} alt={item.title} fluid /> 
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Precio {item.price}
                </Card.Footer>
            </Card>
        </>
    );
}

export default ItemDetail;