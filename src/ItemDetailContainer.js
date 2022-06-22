import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "./components/ItemDetail";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const items = await fetch("https://fakestoreapi.com/products/1");
            return items.json();
        };

        getItems().then((items) => {
            setItems(items);
        });

        // setTimeout(() => {
        //     fetch('https://fakestoreapi.com/products/1')
        //     .then(response => response.json())
        //     .then(data => {setItems(data)})
        //     .catch(error => console.log(error))
        // }, 2000);
    }, []);

    return (
        <>
            <Container>
                <ItemDetail item={items} />
            </Container>
        </>
    );
};

export default ItemDetailContainer;
