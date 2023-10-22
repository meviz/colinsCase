import { Button, Col, Form, Input, Row } from "antd";
import React, { BaseSyntheticEvent } from "react";
import { BarcodeFormProps } from "./index.types";
import { randomSelectItemFromList } from "utils";
import { useDebouncedCallback } from "hooks/useDebouncedCallback";

export const BarcodeForm = ({
    disabled,
    barcodeList = [],
    onBarcodeClick,
    onInputChange,
}: BarcodeFormProps) => {
    const [form] = Form.useForm();

    const handleClick = () => {
        form.resetFields();
        const selectedBarcode = randomSelectItemFromList(barcodeList);
        form.setFieldsValue({
            barcode: selectedBarcode,
        });
        onInputChange && onInputChange(selectedBarcode);
        onBarcodeClick && onBarcodeClick();
    };

    const handleInputChange = useDebouncedCallback((e: BaseSyntheticEvent) => {
        onInputChange && onInputChange(e.target.value);
    }, 500);

    return (
        <Form form={form}>
            <Row gutter={12}>
                <Col md={18} xs={24}>
                    <Form.Item name="barcode">
                        <Input
                            size="large"
                            onKeyUp={handleInputChange}
                            disabled={disabled}
                        />
                    </Form.Item>
                </Col>
                <Col md={6} xs={24}>
                    <Button
                        type="primary"
                        block
                        size="large"
                        onClick={handleClick}
                        disabled={disabled}
                    >
                        BARCODE READER
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};
