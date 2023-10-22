import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "./ShoppingCartSlice";
import { paymentReducer } from "./PaymentSlice";

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        payment: paymentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
