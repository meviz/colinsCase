import React from "react";
import { ContainerWrapper, DividerWrapper } from "./index.style";
import { Col, Row } from "antd";
import { SectionCardProps } from "./index.types";

export const SectionCard = ({
    title,
    action,
    children,
    divider,
}: SectionCardProps) => {
    return (
        <ContainerWrapper>
            <Row justify="space-between" align="middle">
                <Col md={action ? 6 : 24}>
                    <h3>{title}</h3>
                </Col>
                {action && (
                    <Col md={18}>
                        <Row gutter={12} justify="end" align="middle">
                            {action?.map((item, _index) => (
                                <Col key={_index}>{item}</Col>
                            ))}
                        </Row>
                    </Col>
                )}
            </Row>
            <DividerWrapper />
            {children}
        </ContainerWrapper>
    );
};
