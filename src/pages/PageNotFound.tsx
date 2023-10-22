import { Result, Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={handleClick}>
                    Back Home
                </Button>
            }
        />
    );
};
