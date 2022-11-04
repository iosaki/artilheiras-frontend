import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function Login() {
	const [users, setUsers] = useState();
	const axiosPrivate = useAxiosPrivate();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const getUsers = async () => {
			try {
				const response = await axiosPrivate.get("/users");

				setUsers(response.data);
			} catch (err) {
				console.error(err);
				navigate("/login", { state: { from: location }, replace: true });
			}
		};

		getUsers();
	}, [axiosPrivate, location, navigate]);

	return (
		<article>
			<h2>Users List</h2>
			{users?.length ? (
				<>
					<ul>
						{users.map((user, i) => (
							<li key={i}>{user?.email}</li>
						))}
					</ul>
					<a href="/profile">home</a>
				</>
			) : (
				<p>No users to display</p>
			)}
		</article>
	);
}
