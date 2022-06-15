import { Card, Button, InputGroup, Image } from "react-bootstrap";
const Item  = ({id, title, price, pictureUrl}) => {
    return (
        <>
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Image src={pictureUrl} alt={title} fluid /> 
                    <Card.Text>
                        <InputGroup className="mb-3"> 
                            {/* <Button variant="primary" onClick={IncrementCount}>+</Button>
                            <FormControl className="text-center" aria-label="Text input with dropdown button" value={count} /> 
                            <Button variant="danger" onClick={DecrementCount}>-</Button> */}
                        </InputGroup>
                    <div className="text-center">
                        <Button variant="outline-primary" >Ver detalle del producto</Button>
                    </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Stock disponible: 17
                </Card.Footer>
            </Card>
        </>
    );
}
export default Item;