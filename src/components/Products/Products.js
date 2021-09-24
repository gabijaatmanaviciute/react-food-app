import {Fragment} from "react";
import ProductSummary from "./ProductSummary";
import AvailableProducts from "./AvailableProducts";

const Products = () => {
return (
    <Fragment>
        <ProductSummary />
        <AvailableProducts />
    </Fragment>
)
}

export default Products;