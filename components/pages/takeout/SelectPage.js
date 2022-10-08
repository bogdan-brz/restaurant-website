import { useContext } from "react";
import CartContext from "./cart-context/CartContext";
import styles from "./SelectPage.module.css";

const SelectPage = (props) => {
    const ctx = useContext(CartContext);
    return (
        <div className={styles.selectpage}>
            <h2 className={styles.title}>{props.title}</h2>
            {props.selection.map((dish) => (
                <div key={dish.id} className={styles.option}>
                    <div className={styles.addsection}>
                        <button
                            className={`${styles.plusbtn} ${
                                !ctx.cartEnabled ? styles.disabled : ""
                            }`}
                            onClick={() => {
                                ctx.dispatchCart({
                                    type: "add-dish",
                                    payload: dish,
                                });
                            }}>
                            +
                        </button>
                    </div>
                    <div className={styles.dish}>
                        <b className={styles.name}>{dish.name}</b> -{" "}
                        <p className={styles.description}>{dish.description}</p>{" "}
                        <span className={styles.price}>
                            ${dish.price.toFixed(2)}
                        </span>
                    </div>
                    {ctx.dishInCart(dish.id).inCart && (
                        <div className={styles.quantitysection}>
                            <span className={styles.quantity}>
                                {ctx.dishInCart(dish.id).quantity}
                            </span>
                            <button
                                className={styles.minusbtn}
                                onClick={() => {
                                    ctx.dispatchCart({
                                        type: "remove-dish",
                                        payload: dish.id,
                                    });
                                }}>
                                -
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SelectPage;
