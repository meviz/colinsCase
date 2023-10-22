export type ShoppingCartItem = {
    cartId?: string;
} & Product;

export interface Product {
    id: number;
    barcode: string;
    name: string;
    price: number;
    tax: number;
}

export interface AmountInfo {
    remainingAmount: number;
    changeAmount: number;
}

export interface TotalPriceInfo {
    count: number;
    totalTax: number;
    totalPriceWithoutTax: number;
    totalPriceWithTax: number;
}

export type PaymentItem = {
    id: string;
} & Payment;

export interface Payment {
    paymentMethod: "creditCard" | "cash";
    paymentAmount: number;
}

export interface User {
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}
