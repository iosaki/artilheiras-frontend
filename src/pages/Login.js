import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "/login";

const Login = () => {
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ email, password }),
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			console.log(JSON.stringify(response?.data));
			const accessToken = response?.data?.accessToken;
			setAuth({ email, password, accessToken });
			setEmail("");
			setPassword("");
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Missing Email or Password");
			} else if (err.response?.status === 401) {
				setErrMsg("Unauthorized");
			} else {
				setErrMsg("Login Failed");
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<section>
					<h1>You are logged in!</h1>
					<br />
					<p>
						<a href="#">Go to Home</a>
					</p>
				</section>
			) : (
				<section>
					<p
						ref={errRef}
						className={errMsg ? "errmsg" : "offscreen"}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<div className="h-screen flex flex-col justify-center p-4 py-12 sm:px-6 lg:px-8">
						<div className="sm:mx-auto sm:w-full sm:max-w-md">
							<img
								className="mx-auto h-8 w-auto"
								src={process.env.PUBLIC_URL + "/artilheiras.png"}
								alt="Workflow"
							/>
						</div>

						<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
							<div className="bg-white py-8 px-4 sm:px-10">
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
									action="#"
									method="POST"
								>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700"
										>
											email
										</label>
										<div className="mt-1">
											<input
												id="email"
												name="email"
												type="email"
												autoComplete="off"
												ref={userRef}
												onChange={(e) => setEmail(e.target.value)}
												value={email}
												required
												className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="password"
											className="block text-sm font-medium text-gray-700"
										>
											senha
										</label>
										<div className="mt-1">
											<input
												id="password"
												name="password"
												type="password"
												onChange={(e) => setPassword(e.target.value)}
												value={password}
												required
												className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
											/>
										</div>
									</div>

									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<input
												id="remember-me"
												name="remember-me"
												type="checkbox"
												className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
											/>
											<label
												htmlFor="remember-me"
												className="ml-2 block text-sm text-gray-900"
											>
												lembrar-me
											</label>
										</div>

										<div className="text-sm">
											<a
												href="#"
												className="font-medium text-orange-600 hover:text-orange-500"
											>
												esqueceu sua senha?
											</a>
										</div>
									</div>

									<div>
										<button
											type="submit"
											className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
										>
											entrar
										</button>
									</div>
									<p className="mt-2 text-center text-sm text-gray-600">
										ou{" "}
										<a
											href={process.env.BASE_URL + "/Registration.js"}
											className="font-medium text-orange-600 hover:text-orange-500"
										>
											crie uma conta
										</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Login;
