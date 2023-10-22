import { message } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./index.style";

export const MainLayout = () => {
    const [, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <LayoutWrapper>
                <Outlet />
            </LayoutWrapper>
        </>
    );
};
