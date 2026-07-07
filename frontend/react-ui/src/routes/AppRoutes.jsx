import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";

function AppRoutes() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>

                    <Route
                        path="/"
                        element={<Navigate to="/dashboard" />}
                    />

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/users"
                        element={<Users />}
                    />

                    <Route
                        path="/products"
                        element={<Products />}
                    />

                    <Route
                        path="/orders"
                        element={<Orders />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default AppRoutes;