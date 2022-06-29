import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import { SkeletonCard } from "./components/ProductLoader";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const getItems = async () => {
            const items = await fetch(
                `https://fakestoreapi.com/products/${id}`
            );
            return items.json();
        };

        getItems().then((items) => {
            setLoading(false);
            setItems(items);
        });
    }, [id]);

    return (
        <>
            <Container>
                {loading ? <SkeletonCard /> : <ItemDetail item={items} />}
            </Container>
        </>
    );
};

export default ItemDetailContainer;
