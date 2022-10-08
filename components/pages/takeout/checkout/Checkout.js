import { useContext } from "react";
import CartContext from "../cart-context/CartContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
    const ctx = useContext(CartContext);
    const checkoutHandler = () => {};
    return (
        <div className={styles.checkout}>
            <div className={styles.cart}>
                {ctx.cart.map((dish) => (
                    <div key={dish.id} className={styles.dish}>
                        {dish.name}{" "}
                        <span className={styles.quantity}>
                            x{dish.quantity}
                        </span>{" "}
                        <span className={styles.grow}></span>
                        <span className={styles.priceperdish}>
                            ${dish.quantity * dish.price}
                        </span>
                    </div>
                ))}
            </div>
            <div className={styles.total}>Total: {ctx.total}</div>
            <div
                onClick={checkoutHandler}
                className={`${styles.checkoutlink} ${
                    !ctx.cartEnabled ? styles.disabled : ""
                }`}>
                Proceed to checkout
            </div>
        </div>
    );
};

export default Checkout;
