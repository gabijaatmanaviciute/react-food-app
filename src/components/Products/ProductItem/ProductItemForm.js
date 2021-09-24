import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

const ProductItemForm = () => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount_' + PaymentResponse.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1' 
            }} />
            <button>Add</button>
        </form>
    )
}

export default ProductItemForm;