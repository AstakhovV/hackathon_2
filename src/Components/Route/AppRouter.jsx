import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { routes } from "../../constants/routes";
import { NOT_FOUND_ROUTE } from "../../constants/path";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(({id, path, Component, exact}) => <Route key={`route-${id}`} exact={exact} path={path} component={Component} />)}
            <Redirect to={NOT_FOUND_ROUTE} />
        </Switch>
    );
};

export default AppRouter;
