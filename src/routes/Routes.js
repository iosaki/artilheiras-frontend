import { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import ResetPassword from "../pages/ResetPassword";

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route
					path="/home"
					element={
						<PrivateRoutes>
							<Home />
						</PrivateRoutes>
					}
				/>
				<Route
					path="/profile"
					element={
						<PrivateRoutes>
							<Profile />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
