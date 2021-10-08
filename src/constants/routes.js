import Favorites from "../Layouts/Favorites";
import Home from "../Layouts/Home";
import Users from "../Layouts/Users";
import NotFound from "../Layouts/NotFound";
import { FAVORITES_ROUTE, HOME_ROUTE, NOT_FOUND_ROUTE, USERS_ROUTE } from "./path";

export const routes = [
    {id: 1, path: HOME_ROUTE, exact: true, Component: Home},
    {id: 2, path: FAVORITES_ROUTE, Component: Favorites},
    {id: 3, path: USERS_ROUTE + '/:userId?', exact: true, Component: Users},
    {id: 4, path: NOT_FOUND_ROUTE, exact: true, Component: NotFound},
]