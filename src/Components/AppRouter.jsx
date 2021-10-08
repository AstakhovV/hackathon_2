import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { routes } from "../routes";
import { NOT_FOUND_ROUTE } from "../utils/consts";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(({path, Component, exact}) => <Route exact={exact} path={path} component={Component} />)}
            <Redirect to={NOT_FOUND_ROUTE} />
        </Switch>
    );
};

export default AppRouter;
