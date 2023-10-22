import { SectionCard } from "components/atoms/SectionCard";
import React from "react";
import { AddPayment } from "../AddPayment";
import { PaymentItems } from "../PaymentItems";

export const PaymentInfo = () => {
    return (
        <SectionCard title="Payment Info">
            <AddPayment />
            <PaymentItems />
        </SectionCard>
    );
};
