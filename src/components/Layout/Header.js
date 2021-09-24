import { Fragment } from "react";
import classes from "./Header.module.css";
import foodImage from "../../assets/food-image-header.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
return (
    <Fragment>
        <header className={classes.header}>
            <h1>Gabi's Grocery Shop</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt="Healthy food products" />
        </div>
    </Fragment>
)
}

export default Header;