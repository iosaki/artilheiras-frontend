import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Admin from "./pages/Admin";
import Unauthorized from "./pages/Unauthorized";
import LinkPage from "./pages/LinkPage";
import ResetPassword from "./pages/ResetPassword";
import RequireAuth from "./components/Auth/RequireAuth";
import PersistLogin from "./components/Auth/PersistLogin";
import Profile from "./pages/Profile";

function App() {
	return (
		<main className="App">
			<Routes>
				{/* public routes */}
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/linkpage" element={<LinkPage />} />
				<Route path="/unauthorized" element={<Unauthorized />} />

				{/* protected routes */}
				<Route element={<PersistLogin />}>
					<Route element={<RequireAuth />}>
						<Route path="/" element={<Home />} />
						<Route path="/editor" element={<Editor />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/profile" element={<Profile />} />
					</Route>
				</Route>
			</Routes>
		</main>
	);
}

export default App;
