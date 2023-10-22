import React from "react";
import { SelectWrapper } from "./index.style";

const PaymentData = [
    { value: "creditCard", label: "Credit Card" },
    { value: "cash", label: "Cash" },
];

export const PaymentSelect = ({ ...rest }) => {
    return (
        <SelectWrapper
            placeholder="Select payment method"
            options={PaymentData}
            size="large"
            {...rest}
        />
    );
};
