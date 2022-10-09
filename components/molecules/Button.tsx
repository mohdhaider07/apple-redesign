import React from "react";
interface Props {
	title: string;
	onclick?: () => void;
	width?: string;
	padding?: string;
	loading?: boolean;
	noIcon?: boolean;
}
const Button = ({ title, loading, width, padding }: Props) => {
	return (
		<button
			className={` ${padding ? padding : " px-8 py-3"} ${
				width ? width : "w-auto"
			} btn gradiantPinkToViolet rounded  px-8 py-3 font-semibold`}
		>
			<span className="text-white">{loading ? "Loading.." : title}</span>
		</button>
	);
};
export default Button;
