import { Col, Row } from "antd";
import { PageLayoyut } from "components/molecules/PageLayout";
import { AddShoppingCart } from "components/organisms/AddShoppingCart";
import { ShoppingCartItems } from "components/organisms/ShoppingCartItems";
import { TotalPrice } from "components/organisms/TotalPrice";
import React from "react";

export const ShoppingCart = () => {
    return (
        <PageLayoyut
            title="Shopping Cart"
            breadcrumbItems={[{ title: "Shopping Cart" }]}
        >
            <AddShoppingCart />
            <Row gutter={[12, 0]}>
                <Col md={18} xs={24}>
                    <ShoppingCartItems />
                </Col>
                <Col md={6} xs={24}>
                    <TotalPrice />
                </Col>
            </Row>
        </PageLayoyut>
    );
};
