import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Loading from "./loading";
import ModalPortal from "./modalPortal";

const GetProducts = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isThereAModal, setIsThereAModal] = useState(false);
    const API = "https://fakestoreapi.com/products/";
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const enableModal = () => {
        if(!isThereAModal){ 
        setShowModal(true);
        setIsThereAModal(true);
        } else {
            setShowModal(false);
            setIsThereAModal(false);
        }
        
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

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <legend className="legend-item">{data.category} </legend>
            <h5>{data.title}</h5>
            <img src={data.image} alt={data.title} />
            <p>Price Q{data.price}</p>
            <button onClick={enableModal}>Product Description</button>
            {showModal &&
                createPortal(
                    <ModalPortal data={data} setShowModal={setShowModal} />,
                    document.body
                )}
        </>
    );
};

//TODO: ARREGLAR EL MODAL PARA QUE SE CIERRE

export default GetProducts;
