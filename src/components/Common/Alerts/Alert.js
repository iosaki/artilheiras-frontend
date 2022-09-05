import { XCircleIcon } from "@heroicons/react/20/solid";

export function Alert({ children }) {
	return (
		<div className="rounded-md p-2">
			<div className="flex">
				<div className="flex-shrink-0">
					<XCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-red-500">{children}</h3>
				</div>
			</div>
		</div>
	);
}
