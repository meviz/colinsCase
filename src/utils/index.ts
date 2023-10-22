import { ShoppingCartItem, TotalPriceInfo } from "./index.types";

export const MAX_SHOPPING_CART_ITEM_COUNT = 2;

export const paymentMethodText = {
    creditCard: "Credit Card",
    cash: "Cash",
};

export const calculatePriceWithTax = (price: number, tax: number) =>
    price + calculateTax(price, tax);

export const calculateTax = (price: number, tax: number) => (price / 100) * tax;

export const calculateTotalPriceInfo = (
    shoppingCart: ShoppingCartItem[]
): TotalPriceInfo => {
    const calculatedTotalPriceInfo: TotalPriceInfo = {
        totalPriceWithoutTax: 0,
        totalPriceWithTax: 0,
        totalTax: 0,
        count: shoppingCart.length,
    };

    shoppingCart.forEach((item) => {
        calculatedTotalPriceInfo.totalPriceWithoutTax += item.price;
        calculatedTotalPriceInfo.totalPriceWithTax += calculatePriceWithTax(
            item.price,
            item.tax
        );
        calculatedTotalPriceInfo.totalTax += calculateTax(item.price, item.tax);
    });

    return calculatedTotalPriceInfo;
};

export const calculateAmountInfo = (
    totalPaymentAmount: number,
    totalPrice: number
) => {
    if (totalPrice > totalPaymentAmount) {
        return {
            remainingAmount: totalPrice - totalPaymentAmount,
            changeAmount: 0,
        };
    }

    return {
        remainingAmount: 0,
        changeAmount: totalPaymentAmount - totalPrice,
    };
};

export const randomSelectItemFromList = <T>(item: T[]): T => {
    const randomIndex = Math.floor(Math.random() * item.length);

    return item[randomIndex];
};
