import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";

export default function Home() {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.get("/logout", {
				withCredentials: true,
			});

			navigate("/login");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<section>
			<h1>Home</h1>
			<br />
			<p>You are logged in!</p>
			<br />
			<Link to="/editor">Go to the Editor page</Link>
			<br />
			<Link to="/admin">Go to the Admin page</Link>
			<br />
			<Link to="/lounge">Go to the Lounge</Link>
			<br />
			<Link to="/linkpage">Go to the link page</Link>
			<form onSubmit={handleSubmit}>
				<div>
					<button>Sign Out</button>
				</div>
			</form>
		</section>
	);
}
