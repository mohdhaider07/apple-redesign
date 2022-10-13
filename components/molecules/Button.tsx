import React from "react";
interface Props {
	title: string;
	onClick?: () => void;
	width?: string;
	padding?: string;
	loading?: boolean;
	noIcon?: boolean;
}
const Button = ({ title, onClick, loading, width, padding, noIcon }: Props) => {
	return (
		<button
			className={` ${padding ? padding : " px-8 py-3"} ${
				width ? width : "w-auto"
			} btn gradiantPinkToViolet rounded  px-8 py-3 font-semibold`}
			onClick={onClick}
		>
			<span className="flex items-center justify-center gap-x-2 text-white">
				{noIcon && (
					<svg
						className="flex h-6  text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				)}
				{loading ? "Loading.." : title}
			</span>
		</button>
	);
};
export default Button;
