import { Button, Col, Form, Modal, Row, Space } from "antd";
import { PageLayoyut } from "components/molecules/PageLayout";
import { PaymentInfo } from "components/organisms/PaymentInfo";
import { UserInfo } from "components/organisms/UserInfo";
import { paymentActions } from "contexts/PaymentSlice";
import { shoppingCartActions } from "contexts/ShoppingCartSlice";
import { useAppDispatch, useAppSelector } from "hooks/contextHooks";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "utils/index.types";

export const Payment = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const paymentCompleted = useAppSelector(
        (state) => state.payment.paymentCompleted
    );
    const [userForm] = Form.useForm<User>();
    const [isUserFormValid, setIsUserFormValid] = useState(false);
    const values = Form.useWatch([], userForm);

    useEffect(() => {
        userForm.validateFields({ validateOnly: true }).then(
            () => {
                setIsUserFormValid(true);
            },
            () => {
                setIsUserFormValid(false);
            }
        );
    }, [values, userForm]);

    const handlePaymentFinish = () => {
        dispatch(shoppingCartActions.clearShoppingCart());
        dispatch(paymentActions.clearPaymentItems());
        navigate("/");
    };

    const handlePaymentClick = () => {
        Modal.success({
            title: "Payment received successfully",
            content: "You are directed to the shopping cart screen",
            onOk: handlePaymentFinish,
        });
    };

    return (
        <PageLayoyut
            title="Payment"
            breadcrumbItems={[
                { title: "Shopping Cart", url: "/" },
                { title: "Payment" },
            ]}
        >
            <Space style={{ width: "100%" }} size="large" direction="vertical">
                <Row gutter={[12, 0]}>
                    <Col md={12} xs={24}>
                        <PaymentInfo />
                    </Col>
                    <Col md={12} xs={24}>
                        <UserInfo form={userForm} />
                    </Col>
                </Row>
                <Row justify="end" gutter={12}>
                    <Col md={6}>
                        <Button
                            type="primary"
                            size="large"
                            block
                            disabled={!paymentCompleted || !isUserFormValid}
                            onClick={handlePaymentClick}
                        >
                            PAYMENT
                        </Button>
                    </Col>
                </Row>
            </Space>
        </PageLayoyut>
    );
};
