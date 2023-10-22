import { useRef, useMemo } from "react";
import { calculateAmountInfo } from "utils";
import { useAppSelector } from "./contextHooks";
import { AmountInfo } from "utils/index.types";

export const useCalculateAmountInfo = (): AmountInfo => {
    const totalPaymentAmount = useAppSelector(
        (state) => state.payment.totalPaymentAmount
    );
    const totalPriceInfo = useAppSelector(
        (state) => state.shoppingCart.totalPriceInfo
    );
    const totalPriceInfoRef = useRef(totalPriceInfo.totalPriceWithTax);
    const amountsInfo = useMemo(
        () =>
            calculateAmountInfo(totalPaymentAmount, totalPriceInfoRef.current),
        [totalPaymentAmount]
    );

    return amountsInfo;
};
