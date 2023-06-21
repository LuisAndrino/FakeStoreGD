import GetProducts from "./getProducts";
import ProductsApi from "./ProductsApi";
import "../css/products.css";
import Loading from "./loading"; 

const Products = () => {
    const {isLoading} = ProductsApi();


    if(isLoading) 
        return (
            <Loading />
        )


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
