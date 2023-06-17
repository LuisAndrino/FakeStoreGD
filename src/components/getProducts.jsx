import { useState, useEffect } from "react";

const GetProducts = ( ) => {
    const [data, setData] = useState([]);
    const API = "https://fakestoreapi.com/products/";
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

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
            <legend className="legend-item">{data.category}</legend>
            <h5>{data.title}</h5>
            <img src={data.image} alt={data.title} />
            <button>Buy Q{data.price}</button>
        </>
    );
};

export default GetProducts;
