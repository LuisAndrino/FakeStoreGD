import { useState, useEffect } from "react";

const ProductsApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API = "https://fakestoreapi.com/products/";
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    useEffect(() => {
        setTimeout(() => {
            const getProducts = async (URL, id) => {
                try {
                    const response = await fetch(`${URL}${id}`);
                    const data = await response.json();
                    setData(data);
                    setIsLoading(false);
                } catch (error) {
                    console.log(error);
                }
            };

            (async () => {
                await getProducts(API, randomNum(1, 20));
            })();
        }, 200);
    }, []);

    return { data, isLoading };
};

export default ProductsApi;
