import React from "react";
import {
	HomeIcon,
	UserCircleIcon,
	MapPinIcon,
	StarIcon,
	BellIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
	return (
		<nav
			id="bottom-navigation"
			className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow mx-auto max-w-7xl px-4 "
		>
			<div
				id="tabs"
				className="flex items-center justify-between border-t border-gray-200 py-2 md:justify-start md:space-x-10"
			>
				<a
					href="/home"
					className="w-full justify-center inline-block text-center pt-2 pb-1"
				>
					<HomeIcon className="h-8 w-8 inline-block mb-1 text-gray-500 [&>path]:stroke-[1] hover:text-orange-500" />
				</a>

				<a
					href="#"
					className="w-full focus:text-orange-500 hover:text-orange-500 justify-center inline-block text-center pt-2 pb-1"
				>
					<MapPinIcon className="h-8 w-8 inline-block mb-1 text-gray-500 [&>path]:stroke-[1] hover:text-orange-500" />
				</a>
				<a
					href="#"
					className="w-full focus:text-orange-500 hover:text-orange-500 justify-center inline-block text-center pt-2 pb-1"
				>
					<StarIcon className="h-8 w-8 inline-block mb-1 text-gray-500 [&>path]:stroke-[1] hover:text-orange-500" />
				</a>

				<a
					href="/profile"
					className="w-full focus:text-orange-500 hover:text-orange-500 justify-center inline-block text-center pt-2 pb-1"
				>
					<BellIcon className="h-8 w-8 inline-block mb-1 text-gray-500 [&>path]:stroke-[1] hover:text-orange-500" />
				</a>
				<a
					href="#"
					className="w-full focus:text-orange-500 hover:text-orange-500 justify-center inline-block text-center pt-2 pb-1"
				>
					<UserCircleIcon className="h-8 w-8 inline-block mb-1 text-gray-500 [&>path]:stroke-[1] hover:text-orange-500" />
				</a>
			</div>
		</nav>
	);
}
