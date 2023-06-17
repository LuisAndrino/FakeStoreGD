import GetProducts from "./getProducts";

import "../css/products.css";

const Products = () => {
    return (
        <div className="main-div">
        <fieldset className="main-products">
        <legend className="legend">Sale</legend>
            <div className="products">
                <GetProducts />
            </div>
            <div className="products">
                <GetProducts />
            </div>
            <div className="products">
                <GetProducts />
            </div>
            <div className="products">
                <GetProducts />
            </div>

            <div className="products">
                <GetProducts />
                </div>
            <div className="products">
                <GetProducts />
        </div>
            <div className="products">
                <GetProducts />
        </div>
            <div className="products">
                <GetProducts />
        </div>
            <div className="products">
                <GetProducts />
        </div>
        </fieldset>
        </div>
    );
};

export default Products;
