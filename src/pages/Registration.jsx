import React, { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
	const errRef = useRef();
	let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);

	const [password, setPassword] = useState("");
	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		setValidEmail(/\S+@\S+\.\S+/.test(email));
	}, [email]);

	useEffect(() => {
		setValidMatch(password === matchPwd);
	}, [password, matchPwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"/users",
				JSON.stringify({ email, password }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			navigate("/login");
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("credenciais inválidas");
			} else if (err.response?.status === 401) {
				setErrMsg("Unauthorized");
			} else {
				setErrMsg("Login Failed");
			}
			errRef.current.focus();
		}
	};

	return (
		<div className="h-screen flex flex-col  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-center ">
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
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									aria-invalid={validEmail ? "false" : "true"}
									autoComplete="off"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
								/>
								<p
									className="mt-2 px-3 text-sm text-red-600"
									id="email-error"
									hidden={!validEmail ? false : true}
								>
									email inválido
								</p>
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

						<div>
							<label
								htmlFor="confirm_password"
								className="block text-sm font-medium text-gray-700"
							>
								confirme sua senha
							</label>
							<div className="mt-1">
								<input
									id="passwordConfirm"
									name="passwordConfirm"
									type="password"
									onChange={(e) => setMatchPwd(e.target.value)}
									value={matchPwd}
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
								/>
								<p
									className="mt-2 px-3 text-sm text-red-600"
									id="email-error"
									hidden={!validMatch ? false : true}
								>
									as senhas devem ser iguais.
								</p>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
								disabled={!validEmail || !validMatch ? true : false}
							>
								criar conta
							</button>
							<div className="text-sm  flex justify-center py-3">
								<a
									href="/login"
									className="font-medium text-orange-600 hover:text-orange-500 "
								>
									já tenho uma conta
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
