import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalPortal from "./modalPortal";
import ProductsApi from "./ProductsApi";
import LoadingProducts from "./loadingProducts";

const GetProducts = () => {
    const [showModal, setShowModal] = useState(false);
    const { data, isLoading } = ProductsApi();
    const enableModal = () => {
        setShowModal(!showModal);
    };

    if (isLoading) {
        return <LoadingProducts />;
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
                    <>
                        <ModalPortal data={data} setShowModal={setShowModal} />
                    </>,
                    document.body
                )}
        </>
    );
};

export default GetProducts;
