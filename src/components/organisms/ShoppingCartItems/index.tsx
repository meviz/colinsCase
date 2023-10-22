import React from "react";
import { Button, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { ShoppingCartItem } from "utils/index.types";
import { calculatePriceWithTax } from "utils";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "hooks/contextHooks";
import { shoppingCartActions } from "contexts/ShoppingCartSlice";
import { SectionCard } from "components/atoms/SectionCard";

export const ShoppingCartItems = () => {
    const dispatch = useAppDispatch();
    const shoppingCartItems = useAppSelector(
        (state) => state.shoppingCart.shoppingCartItems
    );

    const columns: ColumnsType<ShoppingCartItem> = [
        {
            title: "Detail",
            key: "detail",
            render: (item) => {
                return `#${item.barcode} - ${item.name}`;
            },
            defaultSortOrder: "ascend",
            sorter: (a, b) => a.id - b.id,
            width: 450,
        },
        {
            title: "Tax",
            key: "tax",
            dataIndex: "tax",
            render: (item) => `% ${item}`,
        },
        {
            title: "Price",
            key: "price",
            dataIndex: "price",
            render: (item) => `${item} ₺`,
        },
        {
            title: "Price with tax",
            key: "priceWithTax",
            render: (item) =>
                `${calculatePriceWithTax(item.price, item.tax)} ₺`,
        },
        {
            title: "Action",
            key: "remove",
            render: (item) => (
                <Tooltip title={`Remove #${item.barcode}`}>
                    <Button
                        type="default"
                        icon={<DeleteOutlined />}
                        size="middle"
                        onClick={() => handleRemoveItem(item)}
                    />
                </Tooltip>
            ),
            align: "right",
        },
    ];

    const handleRemoveItem = (item: ShoppingCartItem) => {
        dispatch(shoppingCartActions.removeItemFromShoppingCart(item));
    };

    const handleRemoveAllItem = () => {
        dispatch(shoppingCartActions.clearShoppingCart());
    };

    return (
        <SectionCard
            title="Shopping Cart Items"
            action={[
                <Button
                    type="default"
                    icon={<DeleteOutlined />}
                    size="large"
                    onClick={handleRemoveAllItem}
                >
                    Remove all
                </Button>,
            ]}
        >
            <Table
                columns={columns}
                dataSource={shoppingCartItems.map((item) => ({
                    key: item.cartId,
                    ...item,
                }))}
                pagination={false}
            />
        </SectionCard>
    );
};
