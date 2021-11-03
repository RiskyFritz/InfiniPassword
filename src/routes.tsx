import React, { useEffect, useMemo, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// ____ TYPES ____

// ____ GLOB IMPORTS ____
// > glob import all special pages
const PRESERVED = import.meta.globEager("/src/pages/**/(__layout|404).tsx");
// > glob import all routes
const ROUTES = import.meta.globEager("/src/pages/**/[a-z[]*.tsx");
// > glob import __app
const APP = import.meta.globEager("/src/pages/__app.tsx");
console.log({ APP });

// ____ GLOB TRANSFORMS ____
// > transform layout pages into object array
const layouts = Object.keys(PRESERVED)
	.filter((key) => key.includes("__layout"))
	.map((route) => {
		const path = route
			.replace(/\/src\/pages|index|\.tsx$/g, "")
			.replace(/\[\.{3}.+\]/, "*")
			.replace(/\[(.+)\]/, ":$1")
			.replace("__layout", "");

		console.log({ route, path });

		return { path, component: PRESERVED[route].default };
	})
	.sort((a, b) => b.path.split("/").length - a.path.split("/").length);

// > transform 404 pages into object array
const fourOhFours = Object.keys(PRESERVED)
	.filter((key) => key.includes("404"))
	.map((route) => {
		const path = route
			.replace(/\/src\/pages|index|\.tsx$/g, "")
			.replace(/\[\.{3}.+\]/, "*")
			.replace(/\[(.+)\]/, ":$1")
			.replace("404", "");

		console.log({ route, path });

		return { path, component: PRESERVED[route].default };
	})
	.sort((a, b) => b.path.split("/").length - a.path.split("/").length);

// > transform routes into object array
const routes = Object.keys(ROUTES).map((route) => {
	const path = route
		.replace(/\/src\/pages|index|\.tsx$/g, "")
		.replace(/\[\.{3}.+\]/, "*")
		.replace(/\[(.+)\]/, ":$1");

	return { path, component: ROUTES[route].default };
});

// > transform app into component or fragment
const App =
	APP?.["/src/pages/__app.tsx"]?.default ??
	((({ children }) => <>{children}</>) as React.FC);
console.log({ App, APP });
// ____ COMPONENTS ____
const Layout: React.FC = ({ children }) => {
	return (
		<Switch>
			{layouts.map(({ path, component: Component = React.Fragment }) => (
				<Route key={path} path={path}>
					<Component>{children}</Component>
				</Route>
			))}
		</Switch>
	);
};

const NotFound = () => {
	return (
		<Route path="*">
			<Switch>
				{fourOhFours.map(({ path, component: Component = React.Fragment }) => (
					<Route key={path} path={path} component={Component} />
				))}
			</Switch>
		</Route>
	);
};

export const Routes = () => {
	return (
		<App>
			<Layout>
				<Switch>
					{routes.map(({ path, component: Component = React.Fragment }) => (
						<Route key={path} path={path} component={Component} exact={true} />
					))}
					<NotFound />
				</Switch>
			</Layout>
		</App>
	);
};
