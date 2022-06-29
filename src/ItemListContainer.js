import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./components/ItemList";
import ProductLoader from "./components/ProductLoader";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
    console.log(category);
    // const [error, setError] = useState(null);
    // const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getItems = async () => {
            if (category) {
                const items = await fetch(
                    `https://fakestoreapi.com/products/category/${category}`
                );
                return items.json();
            } else {
                const items = await fetch("https://fakestoreapi.com/products");
                return items.json();
            }
        };

        getItems()
            .then((items) => {
                setLoading(false);
                setItems(items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [category]);

    // console.log(items);
    // retornar el componente ItemList con los items que se obtuvieron de la API y se pasan como props al componente ItemList
    return <>{loading ? <ProductLoader /> : <ItemList items={items} />}</>;
};
export default ItemListContainer;
