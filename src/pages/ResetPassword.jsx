import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Common/Alerts/Alert";

export default function ResetPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage("");
			setError("");
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage("Check your inbox for further instructions");
		} catch {
			setError("Failed to reset password");
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
							<button
								disabled={loading}
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
							>
								recuperar senha
							</button>
						</div>
					</form>
				</div>
				<div className="text-sm flex justify-center py-3">
					<a
						href="/login"
						className="font-medium text-orange-600 hover:text-orange-500 "
					>
						entrar
					</a>
				</div>
			</div>
		</div>
	);
}
