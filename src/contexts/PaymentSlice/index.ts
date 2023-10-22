import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Payment, PaymentItem } from "utils/index.types";

export interface PaymentContext {
    paymentList: PaymentItem[];
    totalPaymentAmount: number;
    paymentCompleted: boolean;
}

const initialState: PaymentContext = {
    paymentList: [],
    totalPaymentAmount: 0,
    paymentCompleted: false,
};

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        addPayment: (
            state: PaymentContext,
            { payload }: { payload: Payment }
        ) => {
            state.paymentList.push({
                ...payload,
                id: nanoid(),
            });
            state.totalPaymentAmount += payload.paymentAmount;
        },
        removePaymentItem: (
            state: PaymentContext,
            { payload }: { payload: PaymentItem }
        ) => {
            const filteredPaymentList = state.paymentList.filter(
                (item) => item.id !== payload.id
            );
            state.paymentList = filteredPaymentList;
            state.totalPaymentAmount -= payload.paymentAmount;
        },
        clearPaymentItems: (state: PaymentContext) => {
            state.paymentList = initialState.paymentList;
            state.totalPaymentAmount = initialState.totalPaymentAmount;
        },
        setPaymentCompleteState: (
            state: PaymentContext,
            { payload }: { payload: number }
        ) => {
            state.paymentCompleted = payload === 0;
        },
    },
});

export const paymentActions = paymentSlice.actions;
export const paymentReducer = paymentSlice.reducer;
