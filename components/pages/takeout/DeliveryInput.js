import { useContext, useRef, useState } from "react";
import CartContext from "./cart-context/CartContext";
import styles from "./DeliveryInput.module.css";

const DeliveryInput = () => {
    const addressRef = useRef(null);
    const ctx = useContext(CartContext);
    return (
        <div className={styles.deliveryinput}>
            <h2 className={styles.title}>Where are we delivering?</h2>
            <input className={styles.input} ref={addressRef} />
            <button
                className={styles.button}
                onClick={() => {
                    ctx.submitDeliveryInput(addressRef.current.value);
                }}>
                Enter
            </button>
            <div
                className={`${
                    ctx.deliveryInputIsValid
                        ? styles.successmsg
                        : styles.failuremsg
                }`}>
                {ctx.deliveryInputMsg}
            </div>
        </div>
    );
};

export default DeliveryInput;
