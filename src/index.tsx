import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider, message } from "antd";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "contexts/store";
import { App } from "App";
import theme from "assets/theme/theme.json";
import "assets/css/globalStyle.css";
import { NoData } from "components/atoms/NoData";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            cacheTime: 0,
            retry: 3,
            retryDelay: 3000,
        },
    },
});

message.config({
    maxCount: 3,
});

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ConfigProvider theme={theme} renderEmpty={() => <NoData />}>
                    <ThemeProvider theme={theme}>
                        <App />
                    </ThemeProvider>
                </ConfigProvider>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
