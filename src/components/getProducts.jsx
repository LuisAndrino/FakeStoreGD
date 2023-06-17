import { useState, useEffect } from "react";

const GetProducts = ({ number }) => {
    const [data, setData] = useState([]);
    const API = "https://fakestoreapi.com/products/";

    useEffect(() => {
        const getProducts = async (URL, id) => {
            try {
                const response = await fetch(`${URL}${id}`);
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        (async () => {
            await getProducts(API, number);
        })();
    }, []);
    return (
        <>
            <h4>{data.title}</h4>
            <img src={data.image} alt={data.title} />
            <p>{data.description}</p>
        </>
    );
};

export default GetProducts;
