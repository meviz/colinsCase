import { message } from "antd";
import { PaymentForm } from "components/molecules/PaymentForm";
import { paymentActions } from "contexts/PaymentSlice";
import { useAppDispatch } from "hooks/contextHooks";
import { useCalculateAmountInfo } from "hooks/useCalculateAmountInfo";
import React, { useEffect } from "react";
import { Payment } from "utils/index.types";

export const AddPayment = () => {
    const dispatch = useAppDispatch();
    const amountsInfo = useCalculateAmountInfo();

    const checkPaymentValidation = (payment: Payment) => {
        if (
            payment.paymentMethod === "creditCard" &&
            payment.paymentAmount > amountsInfo.remainingAmount
        ) {
            message.open({
                type: "error",
                content:
                    "The amount paid by credit card cannot exceed the total payable amount.",
            });

            return false;
        }

        return true;
    };

    useEffect(() => {
        dispatch(
            paymentActions.setPaymentCompleteState(amountsInfo.remainingAmount)
        );
    }, [amountsInfo.remainingAmount, dispatch]);

    const handleAddPayment = (value: Payment) => {
        const paymentValidation = checkPaymentValidation(value);
        if (paymentValidation) {
            dispatch(paymentActions.addPayment(value));
        }
    };

    return <PaymentForm onAdd={handleAddPayment} />;
};
