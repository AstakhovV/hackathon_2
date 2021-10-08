import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NavBar, NotFound, Users, Home, Favorites } from "./Components";

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route path='/favorites' component={Favorites} />
				<Route path='/users/:userId?' component={Users} />
				<Route path='/' exact component={Home} />
				<Route path='/404' component={NotFound} />
				<Redirect to='/404' />
			</Switch>
		</div>
	);
}

export default App;