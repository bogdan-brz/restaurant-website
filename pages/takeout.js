import { Fragment } from "react";
import { CartContextProvider } from "../components/pages/takeout/cart-context/CartContext";
import ToGoPage from "../components/pages/takeout/TakeoutPage";

const ToGo = () => {
    return (
        <CartContextProvider>
            <ToGoPage />
        </CartContextProvider>
    );
};

export default ToGo;
