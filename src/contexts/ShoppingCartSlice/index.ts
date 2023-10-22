import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
    Product,
    ShoppingCartItem,
    TotalPriceInfo,
} from "../../utils/index.types";
import { calculateTotalPriceInfo } from "utils";

export interface ShoppingCartContext {
    shoppingCartItems: ShoppingCartItem[];
    totalPriceInfo: TotalPriceInfo;
}

const initialState: ShoppingCartContext = {
    shoppingCartItems: [],
    totalPriceInfo: {
        count: 0,
        totalTax: 0,
        totalPriceWithoutTax: 0,
        totalPriceWithTax: 0,
    },
};

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        addShoppingCart: (
            state: ShoppingCartContext,
            { payload }: { payload: Product }
        ) => {
            state.shoppingCartItems.push({
                ...payload,
                cartId: nanoid(),
            });

            state.totalPriceInfo = calculateTotalPriceInfo(
                state.shoppingCartItems
            );
        },
        removeItemFromShoppingCart: (
            state: ShoppingCartContext,
            { payload }: { payload: ShoppingCartItem }
        ) => {
            const filteredShoppingCart = state.shoppingCartItems.filter(
                (item) => item.cartId !== payload.cartId
            );
            state.shoppingCartItems = filteredShoppingCart;
            state.totalPriceInfo = calculateTotalPriceInfo(
                state.shoppingCartItems
            );
        },
        clearShoppingCart: (state: ShoppingCartContext) => {
            state.shoppingCartItems = initialState.shoppingCartItems;
            state.totalPriceInfo = initialState.totalPriceInfo;
        },
    },
});

export const shoppingCartActions = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
