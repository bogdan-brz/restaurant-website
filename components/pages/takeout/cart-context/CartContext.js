import React, { useReducer, useState } from "react";

const cartReducer = (state, action) => {
    const _state = { ...state };
    if (action.type == "select-takeout-type") {
        if (_state.takeoutType != action.payload) {
            _state.deliveryInputIsValid = false;
            _state.takeoutType = action.payload;
            _state.cart = [];
            _state.takeoutTextHighlight = false;
        }
    } else if (action.type == "set-delivery-input-validity") {
        _state.deliveryInputIsValid = action.payload;
        if (action.payload == false) {
            _state.deliveryInputMsg = "sorry, we can't deliver that far";
        } else {
            _state.deliveryInputMsg = "great, we can deliver to this address";
        }
    } else if (action.type == "add-dish") {
        if (_state.cartEnabled) {
            if (
                _state.cart.filter((dish) => dish.id == action.payload.id)
                    .length == 1
            ) {
                _state.cart = _state.cart.map((dish) => {
                    if (dish.id == action.payload.id)
                        return { ...dish, quantity: dish.quantity + 1 };
                    else return dish;
                });
            } else {
                _state.cart.push({ ...action.payload, quantity: 1 });
            }
        } else {
            if (_state.takeoutType == null) _state.takeoutTextHighlight = true;
            else if (!_state.deliveryInputIsValid) {
                _state.deliveryInputMsg = "enter a valid address";
            }
        }
    } else if (action.type == "remove-dish") {
        if (_state.cartEnabled) {
            let _cart = [];
            _state.cart.forEach((dish) => {
                if (dish.id == action.payload) {
                    if (dish.quantity != 1)
                        _cart.push({ ...dish, quantity: dish.quantity - 1 });
                } else _cart.push(dish);
            });
            _state.cart = _cart;
        } else {
            if (_state.takeoutType == null) _state.takeoutTextHighlight = true;
            else if (!_state.deliveryInputIsValid) {
                _state.deliveryInputMsg = "enter a valid address";
            }
        }
    }

    _state.cartEnabled =
        _state.takeoutType == "carryout" ||
        (_state.takeoutType == "delivery" &&
            _state.deliveryInputIsValid == true);

    let total = 0;
    _state.cart.forEach((dish) => {
        total += dish.price * dish.quantity;
    });
    _state.total = `$${total.toFixed(2)}`;

    return _state;
};

const CartContext = React.createContext({
    cart: [],
    total: "$0.00",
    takeoutType: null,
    takeoutTextHighlight: false,
    deliveryInputIsValid: null,
    deliveryInputMsg: "",
    cartEnabled: false,
    dishInCart: () => {},
    dispatchCart: () => {},
    submitDeliveryInput: () => {},
});

const CartContextProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, {
        cart: [],
        total: "$0.00",
        takeoutType: null,
        deliveryInputIsValid: null,
        takeoutTextHighlight: false,
        deliveryInputMsg: "",
        cartEnabled: false,
    });
    const submitDeliveryInput = async (address) => {
        // fetch backend and check if address is valid
        const addressIsValid = true;
        dispatchCart({
            type: "set-delivery-input-validity",
            payload: addressIsValid,
        });
    };
    const dishInCart = (id) => {
        let cartById = cartState.cart.filter((dish) => dish.id == id);
        if (cartById.length > 0)
            return { inCart: true, quantity: cartById[0].quantity };
        else return { inCart: false };
    };
    return (
        <CartContext.Provider
            value={{
                cart: cartState.cart,
                total: cartState.total,
                takeoutType: cartState.takeoutType,
                takeoutTextHighlight: cartState.takeoutTextHighlight,
                deliveryInputIsValid: cartState.deliveryInputIsValid,
                deliveryInputMsg: cartState.deliveryInputMsg,
                cartEnabled: cartState.cartEnabled,
                dishInCart: dishInCart,
                dispatchCart: dispatchCart,
                submitDeliveryInput: submitDeliveryInput,
            }}>
            {props.children}
        </CartContext.Provider>
    );
};

export { CartContextProvider };

export default CartContext;
