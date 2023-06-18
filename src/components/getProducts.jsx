import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const GetProducts = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const API = "https://fakestoreapi.com/products/";
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    useEffect(() => {
        const getProducts = async (URL, id) => {
            try {
                const response = await fetch(`${URL}${id}`);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };

        (async () => {
            await getProducts(API, randomNum(1, 20));
        })();
    }, []);
    return (
        <>
            <legend className="legend-item">{data.category} </legend>
            <h5>{data.title}</h5>
            <img src={data.image} alt={data.title} />
            <p>Price Q{data.price}</p>
            <button onClick={() => setShowModal(true)}>
                Product Description
            </button>
            {showModal &&
                createPortal(
                    <div className="product-description">
                        <h3>{data.title}</h3>
                        <AiFillCloseCircle
                            onClick={() => setShowModal(false)}
                        />
                        <img src={data.image} alt={data.title} />
                        <p>{data.description}</p>
                        <button>Add to cart Q{data.price}</button>
                    </div>,

                    document.body
                )}
        </>
    );
};

export default GetProducts;
