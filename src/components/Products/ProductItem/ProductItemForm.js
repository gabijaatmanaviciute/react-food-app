import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

const ProductItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInoutRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInoutRef.current.value; // the value will always be returned as a string
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
        setAmountIsValid(false);
        return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInoutRef}
        label="Amount"
        input={{
          id: "amount_" + PaymentResponse.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default ProductItemForm;
