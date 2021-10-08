import Favorites from "./Layouts/Favorites";
import Home from "./Layouts/Home";
import Users from "./Layouts/Users";
import NotFound from "./Layouts/NotFound";
import { FAVORITES_ROUTE, HOME_ROUTE, NOT_FOUND_ROUTE, USERS_ROUTE } from "./utils/consts";

export const routes = [
    {path: HOME_ROUTE, exact: true, Component: Home},
    {path: FAVORITES_ROUTE, Component: Favorites},
    {path: USERS_ROUTE + '/:userId?', exact: true, Component: Users},
    {path: NOT_FOUND_ROUTE, exact: true, Component: NotFound},
]