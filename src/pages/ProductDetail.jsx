import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { productId } = useParams(); // Access the dynamic parameter
    
    // Placeholder data; in a real app, you'd fetch data based on `productId`
    const products = {
        1: { name: "Smartphone", price: "$299" },
        2: { name: "Laptop", price: "$999" },
        3: { name: "Headphones", price: "$99" },
    };

    const product = products[productId];

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
        </div>
    );
}
