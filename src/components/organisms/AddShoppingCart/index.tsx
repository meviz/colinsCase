import { BarcodeForm } from "components/molecules/BarcodeForm";
import React, { useMemo } from "react";
import { Product } from "utils/index.types";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "api/clientApi";
import { useAppDispatch, useAppSelector } from "hooks/contextHooks";
import { shoppingCartActions } from "contexts/ShoppingCartSlice";
import { MAX_SHOPPING_CART_ITEM_COUNT } from "utils";
import { message } from "antd";

export const AddShoppingCart = () => {
    const dispatch = useAppDispatch();
    const shoppingCartItems = useAppSelector(
        (state) => state.shoppingCart.shoppingCartItems
    );
    const { data, isLoading, isError } = useQuery<Product[]>({
        queryKey: ["productsQuery"],
        queryFn: () => getProducts(),
    });

    const barcodeList = useMemo(
        () => data?.map((item) => item.barcode),
        [data]
    );

    const checkValidation = (value: string) =>
        shoppingCartItems.filter((item) => item.barcode === value).length >=
        MAX_SHOPPING_CART_ITEM_COUNT;

    const handleInputChange = (value: string) => {
        const foundProduct = data?.find((item) => item.barcode === value);

        if (foundProduct && checkValidation(foundProduct.barcode)) {
            message.open({
                content:
                    "There cannot be more than two of the same product in the shopping cart.",
                type: "error",
            });
        } else if (foundProduct) {
            dispatch(shoppingCartActions.addShoppingCart(foundProduct));
        } else if (value) {
            message.open({
                content: `Barcode number ${value} was not found in the product list`,
                type: "error",
            });
        }
    };

    return (
        <BarcodeForm
            barcodeList={barcodeList}
            onInputChange={handleInputChange}
            disabled={isLoading || isError}
        />
    );
};
