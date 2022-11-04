import React, { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
	const { setAuth } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const emailRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [password, setPwd] = useState("");
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"/login",
				JSON.stringify({ email, password }),
				{
					headers: {
						"access-control-allow-origin": "*",
						"Content-type": "application/json; charset=UTF-8",
						authorization: " xxxxxxxxxx",
					},
					withCredentials: true,
				}
			);
			const accessToken = response?.data?.accessToken;
			setAuth({ email, password, accessToken });
			setEmail("");
			setPwd("");
			navigate(from, { replace: true });
		} catch (err) {
			if (!err?.response) {
				toast.error("No Server Response", {
					position: toast.POSITION.TOP_RIGHT,
				});
			} else if (err.response?.status === 400) {
				toast.error("Credenciais inválidas", {
					position: toast.POSITION.TOP_RIGHT,
				});
			} else if (err.response?.status === 401) {
				toast.error("Não autorizado", { position: toast.POSITION.TOP_RIGHT });
			} else {
				toast.error("O login falhou", { position: toast.POSITION.TOP_RIGHT });
			}
			errRef.current.focus();
		}
	};

	return (
		<section>
			<p ref={errRef} hidden={errMsg ? false : true} aria-live="assertive">
				{errMsg}
			</p>
			<ToastContainer style={{ width: "250px" }} />
			<div className="h-screen flex flex-col  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-center">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img
						className="mx-auto h-8 w-auto"
						src={process.env.PUBLIC_URL + "/artilheiras.png"}
						alt="Workflow"
					/>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form className="space-y-6" onSubmit={handleSubmit}>
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
										ref={emailRef}
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
										onChange={(e) => setPwd(e.target.value)}
										value={password}
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
									/>
								</div>
								<div className="text-sm flex justify-end py-1">
									<a
										href="/reset-password"
										className="font-medium text-orange-600 hover:text-orange-500 "
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
						</form>
					</div>
					<div className="text-sm flex justify-center py-3">
						<Link
							to="/registration"
							className="font-medium text-orange-600 hover:text-orange-500 "
						>
							criar conta
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
