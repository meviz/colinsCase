import React, { useMemo } from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { BreadcrumbProps } from "./index.types";
import { Link } from "react-router-dom";

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
    const newItems = useMemo(
        () => [
            { title: "Home" },
            ...items.map((item) => ({
                title: item.url ? (
                    <Link to={item.url}>{item.title}</Link>
                ) : (
                    item.title
                ),
            })),
        ],
        [items]
    );

    return <AntdBreadcrumb items={newItems} />;
};
