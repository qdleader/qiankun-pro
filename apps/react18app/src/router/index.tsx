import { useRoutes } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import React from "react"

export const rootRouter: any[] = [
	// {
	// 	path: "/",
	// 	element: <Navigate to="/login" />,
	// },
	{
		path: "/home",
		element: <Home />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login",
		},
	},
	{
		path: "/about",
		element: <About />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login",
		},
	},
	// {
	// 	path: "*",
	// 	element: <Navigate to="/404" />,
	// },
]

const Router = () => {
	const routes = useRoutes(rootRouter)
	return routes
}

export default Router
