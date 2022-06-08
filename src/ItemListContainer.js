import { Container } from "react-bootstrap";
const ItemListContainer = (props) => {
    return(
        <>
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <h1>{props.Titulo}</h1>
                    </div>
                </div>
            </Container>
        </>
    );
}
export default ItemListContainer;