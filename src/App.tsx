import { MainLayout } from "components/molecules/MainLayout";
import { PageNotFound } from "pages/PageNotFound";
import { Payment } from "pages/Payment";
import { ShoppingCart } from "pages/ShoppingCart";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<ShoppingCart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
