import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context/CartContext";
import Checkout from "./checkout/Checkout";
import DeliveryInput from "./DeliveryInput";
import FoodSelect from "./FoodSelect";
import styles from "./TakeoutPage.module.css";

const ToGoPage = () => {
    const router = useRouter();
    const ctx = useContext(CartContext);
    const changeQuery = (type) => {
        router.push({
            pathname: "/takeout",
            query: { type: type },
        });
        ctx.dispatchCart({
            type: "select-takeout-type",
            payload: type,
        });
    };
    return (
        <div className={"page " + styles.togo}>
            <div className={styles.content}>
                <span
                    className={`${styles.label} ${
                        ctx.takeoutTextHighlight ? styles.highlight : ""
                    }`}>
                    select takeout option
                </span>
                <div className={styles.typeselect}>
                    <span
                        className={`${styles.selectbtn} ${
                            ctx.takeoutType == "carryout" ? styles.selected : ""
                        }`}
                        onClick={() => {
                            changeQuery("carryout");
                        }}>
                        Carryout
                    </span>
                    <span
                        className={`${styles.selectbtn} ${
                            ctx.takeoutType == "delivery" ? styles.selected : ""
                        }`}
                        onClick={() => {
                            changeQuery("delivery");
                        }}>
                        Delivery
                    </span>
                </div>
                {ctx.takeoutType == "delivery" && <DeliveryInput />}
                <FoodSelect />
                {ctx.cart.length > 0 && <Checkout />}
            </div>
        </div>
    );
};

export default ToGoPage;
