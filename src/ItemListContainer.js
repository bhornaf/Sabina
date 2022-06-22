import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./components/ItemList";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const result = useParams();
    console.log(result);
    useEffect(() => {
        const getItems = async () => {
            if (result.categoryId) {
                const items = await fetch(
                    `https://fakestoreapi.com/products/category/${result.categoryId}`
                );
                return items.json();
            } else {
                const items = await fetch("https://fakestoreapi.com/products");
                return items.json();
            }
        };

        getItems()
            .then((items) => {
                setItems(items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // console.log(items);
    // retornar el componente ItemList con los items que se obtuvieron de la API y se pasan como props al componente ItemList
    return <>{<ItemList items={items} />}</>;
};
export default ItemListContainer;
