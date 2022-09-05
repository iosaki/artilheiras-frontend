import React from "react";
import Navbar from "../components/Common/Navbar/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="h-screen flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
				<h1>this is the homepage</h1>
			</div>
		</>
	);
}
