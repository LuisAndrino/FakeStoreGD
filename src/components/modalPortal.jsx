import { AiFillCloseCircle } from "react-icons/ai";

const ModalPortal = ({ data, setShowModal }) => {

    return (
        <div className="product-description">
            <h3>{data.title}</h3>
            <AiFillCloseCircle onClick={() => setShowModal(false)} />
            <img src={data.image} alt={data.title} />
            <p>
                <b>Description: </b> <i>{data.description}</i>
            </p>
            <button>Add to cart Q{data.price}</button>
        </div>
    );
};

export default ModalPortal;
