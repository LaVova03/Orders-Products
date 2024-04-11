import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import OrdersPage from './containers/OrdersPage/OrdersPage';
import RouteAnime from './components/RouteAnime/RouteAnime';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<RouteAnime children1={<OrdersPage />} children2={<OrdersPage />} />}
                />
                <Route
                    path="/products"
                    element={<RouteAnime children1={<ProductsPage />} children2={<ProductsPage />} />}
                />
                <Route
                    path="*"
                    element={<div>Page is not found</div>}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
