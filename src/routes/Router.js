import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChartPage from '../pages/ChartPage/ChartPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import RestaurantPage from '../pages/RestaurantPage/RetaurantPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>
                <Route exact path={'/cadastro'}>
                    <SignUpPage />
                </Route>
                <Route exact path={'/carrinho'}>
                    <ChartPage />
                </Route>
                <Route exact path={'/restaurante/:id'}>
                    <RestaurantPage />
                </Route>
                <Route exact path={'/busca'}>
                    <SearchPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;