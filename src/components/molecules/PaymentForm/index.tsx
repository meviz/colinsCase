import { Button, Col, Form, InputNumber, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { PaymentSelect } from "components/atoms/PaymentSelect";
import React from "react";
import { PaymentFormProps } from "./index.types";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Payment } from "utils/index.types";

export const PaymentForm = ({ onAdd }: PaymentFormProps) => {
    const [form] = useForm();

    const handleSubmit = (value: Payment) => {
        onAdd && onAdd(value);
        form.resetFields();
    };

    const handlePriceValidator = (_rule: any, value: number) => {
        if (value > 0 || value === undefined) {
            return Promise.resolve();
        } else {
            return Promise.reject("Payment amount must be greater than 0");
        }
    };

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Row gutter={12}>
                <Col md={12}>
                    <Form.Item
                        label="Payment Method"
                        name="paymentMethod"
                        rules={[
                            {
                                required: true,
                                message: "Payment method is required",
                            },
                        ]}
                    >
                        <PaymentSelect />
                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item
                        label="Payment Amount"
                        name="paymentAmount"
                        rules={[
                            { required: true, message: "Price is required" },
                            { validator: handlePriceValidator },
                        ]}
                    >
                        <InputNumber
                            controls={false}
                            placeholder="Enter payment amount"
                            precision={2}
                            addonAfter="₺"
                            size="large"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
                <Col md={24}>
                    <Form.Item label=" ">
                        <Button
                            icon={<PlusCircleOutlined />}
                            size="large"
                            type="primary"
                            htmlType="submit"
                            block
                        >
                            Add Payment
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
