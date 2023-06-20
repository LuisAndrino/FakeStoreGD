import { AiFillCloseCircle } from "react-icons/ai";
import Cart from "./cart";
import { createPortal } from "react-dom";
import { useState } from "react";

const ModalPortal = ({ data, setShowModal }) => {
    const [enableCart, setEnableCart] = useState(false);
    const enableModal = () => {
        <Cart data={data} />;
        setEnableCart(!enableCart);
    };

    return (
        <div className="product-description">
            <h3>{data.title}</h3>
            <AiFillCloseCircle onClick={() => setShowModal(false)} />
            <img src={data.image} alt={data.title} />
            <p>
                <b>Description: </b> <i>{data.description}</i>
            </p>
            <button onClick={enableModal}>Add to cart Q{data.price}</button>
            {enableCart && createPortal(<Cart data={data} />, document.body)}
        </div>
    );
};

export default ModalPortal;
