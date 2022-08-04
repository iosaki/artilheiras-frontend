import { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/*" element={<Login />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);
};

export default RoutesApp;
