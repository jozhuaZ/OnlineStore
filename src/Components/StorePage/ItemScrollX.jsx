import useItems from "../../hooks/items/useItems";
import ItemCard from "../ItemCard/Card";

const ItemScrollX = () => {
    const { items } = useItems();

    return (
        <section>
                <ItemCard image={items[0]?.getImageUrl()}>
                </ItemCard>
        </section>
    );
};

export default ItemScrollX;