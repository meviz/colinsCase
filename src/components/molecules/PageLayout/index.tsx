import { Card, Tooltip } from "antd";
import React from "react";
import { PageLayoutProps } from "./index.types";
import { Breadcrumb } from "components/atoms/Breadcrumb";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ContainerWrapper, LinkWrapper } from "./index.style";

export const PageLayoyut = ({
    title,
    breadcrumbItems = [],
    backLink,
    children,
}: PageLayoutProps) => {
    return (
        <Card
            title={
                <h2>
                    {backLink && (
                        <LinkWrapper>
                            <Tooltip title="Go back">
                                <Link to={backLink}>
                                    <ArrowLeftOutlined />
                                </Link>
                            </Tooltip>
                        </LinkWrapper>
                    )}
                    {title}
                </h2>
            }
        >
            <Breadcrumb items={breadcrumbItems} />
            <ContainerWrapper>{children}</ContainerWrapper>
        </Card>
    );
};
