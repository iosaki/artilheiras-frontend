import React from "react";
import { useForm } from "react-hook-form";
import axios from "../api/axios";

export default function Registration() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const userRegistration = (data) => axios.post("/users", data);

	return (
		<div className="h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<img
					className="mx-auto h-8 w-auto"
					src={process.env.PUBLIC_URL + "/artilheiras.png"}
					alt="Workflow"
				/>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form
						onSubmit={handleSubmit(userRegistration)}
						className="space-y-6"
						action="#"
						method="POST"
					>
						<div>
							<label
								htmlFor="full_name"
								className="block text-sm font-medium text-gray-700"
							>
								nome completo
							</label>
							<div className="mt-1">
								<input
									id="full_namev"
									name="full_name"
									{...register("full_name")}
									type="full_name"
									autoComplete="full_name"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
								/>
							</div>
						</div>

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
									{...register("email")}
									type="email"
									// autoComplete="email"
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
									{...register("password")}
									type="password"
									// autoComplete="current-password"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
							>
								criar conta
							</button>
							<div className="text-sm  flex justify-center py-3">
								<a
									href="#"
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
