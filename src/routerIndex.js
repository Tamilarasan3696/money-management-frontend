

import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { AppRoutes } from "./router";

import { Home } from './home';
import Login from './login';
import Register from './register';
//import { Slider } from "./slider";

const RouterApp = (props) => {

    return (
        <BrowserRouter>
            <Routes>
          {/* <Route path={'/slider'} element={<Slider />} /> */}
            <Route path={AppRoutes.register} element={<Register />} />

                {/* Home Route */}
                <Route path={AppRoutes.home} element={
                    <Home />
                } />

                {/* Login Route */}
                <Route path={AppRoutes.login} element={<Login />} />

            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;
