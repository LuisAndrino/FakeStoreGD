import GetProducts from "./getProducts";

import "../css/products.css";

const Products = () => {
    return (
        <div className="main-products">
            <div className="products">
                <GetProducts number={1} />
            </div>
            <div className="products">
                <GetProducts number={2} />
            </div>
            <div className="products">
                <GetProducts number={3} />
            </div>
            <div className="products">
                <GetProducts number={4} />
            </div>

            <div className="products">
                <GetProducts number={5} />
                </div>
            <div className="products">
                <GetProducts number={6} />
        </div>
            <div className="products">
                <GetProducts number={7} />
        </div>
            <div className="products">
                <GetProducts number={8} />
        </div>
            <div className="products">
                <GetProducts number={9} />
        </div>
        </div>
    );
};

export default Products;
