import { useForm } from "react-hook-form";
import axios from "../../../../api/axios";
import { RegistrationSchema } from "./RegistrationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
// import yupResolver from 'yup'

export default function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(RegistrationSchema) });

	const userRegistration = (data) => axios.post("/users", data);

	return (
		<form onSubmit={handleSubmit(userRegistration)} className="space-y-6">
			<div>
				<label
					htmlFor="full_name"
					className="block text-sm font-medium text-gray-700"
				>
					nome completo
				</label>
				<div className="mt-1">
					<input
						id="full_name"
						name="full_name"
						{...register("full_name")}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
					/>
					<p className="block text-sm font-sma text-red-700">
						{errors.full_name?.message}
					</p>
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
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
					/>
					<p className="block text-sm font-sma text-red-700">
						{errors.email?.message}
					</p>
				</div>
			</div>

			<div>
				<label
					htmlFor="password"
					className="block text-sm font-medium text-grey-700"
				>
					senha
				</label>
				<div className="mt-1">
					<input
						id="password"
						name="password"
						{...register("password")}
						type="password"
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
					/>
					<p className="block text-sm font-sma text-red-700">
						{errors.password?.message}
					</p>
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
	);
}
