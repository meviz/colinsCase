import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Divider, List, Row } from "antd";
import { paymentActions } from "contexts/PaymentSlice";
import { useAppDispatch, useAppSelector } from "hooks/contextHooks";
import React, { useEffect } from "react";
import { paymentMethodText } from "utils";
import { PaymentItem } from "utils/index.types";
import { AmountInfoWrapper } from "./index.style";
import { useCalculateAmountInfo } from "hooks/useCalculateAmountInfo";

export const PaymentItems = () => {
    const dispatch = useAppDispatch();
    const paymentItems: PaymentItem[] = useAppSelector(
        (state) => state.payment.paymentList
    );
    const amountsInfo = useCalculateAmountInfo();

    const handleRemove = (item: PaymentItem) => {
        dispatch(paymentActions.removePaymentItem(item));
    };

    useEffect(() => {
        dispatch(
            paymentActions.setPaymentCompleteState(amountsInfo.remainingAmount)
        );
    }, [amountsInfo.remainingAmount, dispatch]);

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={paymentItems}
                renderItem={(item: PaymentItem) => (
                    <List.Item
                        actions={[
                            <Button
                                icon={<DeleteOutlined />}
                                onClick={() => handleRemove(item)}
                            />,
                        ]}
                    >
                        <List.Item.Meta
                            title={paymentMethodText[item.paymentMethod]}
                            description={`${item.paymentAmount} ₺`}
                        />
                    </List.Item>
                )}
            />
            <Divider />
            <AmountInfoWrapper>
                <Row justify="end">
                    <Col md={6}>
                        <b>Remaining Amount: </b>
                    </Col>
                    <Col md={4}>
                        <span>{amountsInfo.remainingAmount} ₺</span>
                    </Col>
                </Row>
                <Row justify="end">
                    <Col md={6}>
                        <b>Change Amount: </b>
                    </Col>
                    <Col md={4}>
                        <span>- {amountsInfo.changeAmount} ₺</span>
                    </Col>
                </Row>
            </AmountInfoWrapper>
        </>
    );
};
