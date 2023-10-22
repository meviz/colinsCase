import React from "react";
import { NoDataProps } from "./index.types";
import { EmptyWrapper } from "./index.style";
import emptyCart from "assets/image/emptyCart.svg";

export const NoData = ({
    height = 150,
    description = "There is no data",
}: NoDataProps) => {
    return (
        <EmptyWrapper
            imageStyle={{ height: height, marginBottom: 48 }}
            image={emptyCart}
            description={<h2>{description}</h2>}
        />
    );
};
