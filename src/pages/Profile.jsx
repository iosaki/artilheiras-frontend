import React, { useState } from "react";
import Navbar from "../components/Common/Navbar/Navbar";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			navigate("/login");
		} catch {
			setError("erro ao logar");
		}
	}

	return (
		<>
			<form className="mx-auto max-w-7xl py-4 px-4 mb-12 sm:px-6 lg:px-8">
				<Navbar />
				<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5 ">
					<div className="space-y-6 sm:space-y-5">
						<div className="flex flex-row">
							<ChevronLeftIcon
								className="basis-1/4 h-6 w-6 flex-shrink-0 text-orange-500"
								aria-hidden="true"
							/>
							<h1 className="basis-2/4 flex text-2xl font-medium leading-6 text-orange-500 justify-center">
								conta
							</h1>
						</div>

						<div className="space-y-6 sm:space-y-5">
							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="profile-photo"
									className="block text-s font-medium text-gray-500 sm:mt-px sm:pt-2"
								/>
								<div className="mt-1 sm:col-span-2 sm:mt-0">
									<div className="space-y-1 text-center">
										<div className="mt-1 sm:col-span-2 sm:mt-0">
											<div className="flex items-center justify-center">
												<span className="h-24 w-24 overflow-hidden rounded-full bg-gray-100">
													<svg
														className="h-full w-full text-gray-300"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
													</svg>
												</span>
											</div>
										</div>
										<div className="flex justify-center text-s text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer rounded-md bg-white font-medium text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 hover:text-orange-500"
											>
												<span>editar foto</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													className="sr-only"
												/>
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="first-name"
									className="block text-s font-medium text-gray-500 sm:mt-px sm:pt-2"
								>
									nome
								</label>
								<div className="mt-1 sm:col-span-2 sm:mt-0">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:max-w-xs sm:text-s"
										value={currentUser.email}
									/>
								</div>
							</div>
							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="about"
									className="block text-s font-medium text-gray-500 sm:mt-px sm:pt-2"
								>
									sobre
								</label>
								<div className="mt-1 sm:col-span-2 sm:mt-0">
									<textarea
										id="about"
										name="about"
										rows={3}
										className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-s"
										defaultValue={""}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-col center pt-5">
					<div className="flex justify-center ">
						<button
							type="submit"
							className="ml-3 w-4/6 inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-s font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
						>
							salvar
						</button>
					</div>
					<div className="mt-9 flex justify-center text-orange-500">
						<button onClick={handleLogout}>deslogar</button>
					</div>
				</div>
			</form>
		</>
	);
}
