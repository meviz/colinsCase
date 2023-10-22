import { Col, Divider } from "antd";
import { SectionCard } from "components/atoms/SectionCard";
import { useAppSelector } from "hooks/contextHooks";
import React from "react";
import { ButtonWrapper, RowWrapper } from "./index.style";
import { CreditCardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const TotalPrice = () => {
    const navigate = useNavigate();
    const totalPriceInfo = useAppSelector(
        (state) => state.shoppingCart.totalPriceInfo
    );

    const handleClick = () => {
        navigate("/payment");
    };

    return (
        <>
            <SectionCard title="Total Price" divider>
                <RowWrapper justify="space-between">
                    <Col>
                        <b>Product count:</b>
                    </Col>
                    <Col>
                        <span>{totalPriceInfo.count}</span>
                    </Col>
                </RowWrapper>
                <RowWrapper justify="space-between">
                    <Col>
                        <b>Total tax price:</b>
                    </Col>
                    <Col>
                        <span>{totalPriceInfo.totalTax} ₺</span>
                    </Col>
                </RowWrapper>
                <RowWrapper justify="space-between">
                    <Col>
                        <b>Total price without tax:</b>
                    </Col>
                    <Col>
                        <span>{totalPriceInfo.totalPriceWithoutTax} ₺</span>
                    </Col>
                </RowWrapper>
                <Divider />
                <RowWrapper justify="space-between">
                    <Col>
                        <b>Total Price:</b>
                    </Col>
                    <Col>
                        <span>{totalPriceInfo.totalPriceWithTax} ₺</span>
                    </Col>
                </RowWrapper>
                <ButtonWrapper
                    icon={<CreditCardOutlined />}
                    type="primary"
                    block
                    size="large"
                    onClick={handleClick}
                    disabled={totalPriceInfo.count === 0}
                >
                    Payment
                </ButtonWrapper>
            </SectionCard>
        </>
    );
};
