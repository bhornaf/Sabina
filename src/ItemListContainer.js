import { Container } from "react-bootstrap";
import ItemCount from "./components/ItemCount";
const ItemListContainer = (props) => {
    return(
        <>
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <h1>{props.Titulo}</h1>
                    </div>
                </div>
                <ItemCount stock ="5" initial = "1" onAdd = { ()=> {} }/>
            </Container>
        </>
    );
}
export default ItemListContainer;