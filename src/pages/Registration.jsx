import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Common/Alerts/Alert";

export default function Registration() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("as senhas não são iguais");
		}

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			navigate("/login");
		} catch {
			setError("Failed to create an account");
		}

		setLoading(false);
	}

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
									ref={emailRef}
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
									ref={passwordRef}
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
									ref={passwordConfirmRef}
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
								/>
							</div>
							{error && <Alert>{error}</Alert>}
						</div>

						<div>
							<button
								disabled={loading}
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
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
