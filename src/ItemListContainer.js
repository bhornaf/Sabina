import { useEffect,  useState} from "react";
import { Container } from "react-bootstrap";
// import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const asyncMock = new Promise((resolve) => {    
            setTimeout(() => {        
                const productList = [    
                    {
                        "id": 1, 
                        "title": "React",        
                        "price": "$100",              
                        "pictureUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                    }];
                    resolve(productList);    
                }, 2000);
        })

        asyncMock.then(products => {
            setItems(products);
        }
        );
        
    }, []);

    const onAdd = () => {};

    return(
        <>
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <h1>{props.Titulo}</h1>
                    </div>
                </div>
                <ItemList items={items}  onAdd={onAdd}/>
            </Container>
        </>
    );
}
export default ItemListContainer;