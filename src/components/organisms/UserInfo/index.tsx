import { Form, Input } from "antd";
import { SectionCard } from "components/atoms/SectionCard";
import React from "react";
import { UserInfoProps } from "./index.types";
import { User } from "utils/index.types";

export const UserInfo = ({ form, onFinish }: UserInfoProps) => {
    const handleFinish = (value: User) => {
        onFinish && onFinish(value);
    };

    return (
        <SectionCard title="User Info">
            <Form layout="vertical" form={form} onFinish={handleFinish}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Payment method is required",
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true }]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                        {
                            pattern:
                                /(^[0\s]?[\s]?)([(]?)([0-9])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,
                            message: "Phone number is not a valid phone number",
                        },
                        {
                            required: true,
                            message: "Phone number is required",
                        },
                    ]}
                >
                    <Input
                        placeholder="05554443322"
                        size="large"
                        style={{ width: "100%" }}
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ type: "email" }]}
                >
                    <Input size="large" />
                </Form.Item>
            </Form>
        </SectionCard>
    );
};
