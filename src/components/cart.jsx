import React, { useState } from "react";
const Cart = ({ data }) => {
    const [quantity, setQuantity] = useState(1);
    const [carthasItems, setCarthasItems] = useState(false);


    return (
        <div className="cart">
            <img src={data.image} alt={data.title} />
            <p>Price Q{data.price}</p>
            <p>Quantity = {quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
        </div>
    );
};

export default Cart;
