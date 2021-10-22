import { useState, useRef } from "react";
import classes from "./Checkout.module.css";

// Input validation helper functions:
const isEmpty = (value) => value.trim() === "";
const isFiveCharsLong = (value) => value.trim().length === 5;

function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    firstName: true,
    lastName: true,
    address: true,
    postalCode: true,
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPostalCodeIsValid =
      !isEmpty(enteredPostalCode) && isFiveCharsLong(enteredPostalCode);

    setFormInputsValidity({
      firstName: enteredFirstNameIsValid,
      lastName: enteredLastNameIsValid,
      address: enteredAddressIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredAddressIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      address: enteredAddress,
      postalCode: enteredPostalCode,
    });
  };

  const firstNameControlClasses = `${classes.control} ${
    formInputsValidity.firstName ? "" : classes.invalid
  }`;
  const lastNameControlClasses = `${classes.control} ${
    formInputsValidity.lastName ? "" : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={firstNameControlClasses}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" ref={firstNameInputRef} />
        {!formInputsValidity.firstName && (
          <p>Please enter a valid first name</p>
        )}
      </div>
      <div className={lastNameControlClasses}>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" ref={lastNameInputRef} />
        {!formInputsValidity.lastName && <p>Please enter a valid last name</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Adress</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>Please enter a valid address</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm Order
        </button>
      </div>
    </form>
  );
}

export default Checkout;
