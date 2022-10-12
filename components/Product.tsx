import React from "react";

import { urlFor } from "../sanity";
import Image from "next/image";
import toast from "react-hot-toast";

//Reduc
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";

// icons
import { AiOutlineShoppingCart } from "react-icons/ai";
interface Props {
	product: Product;
}

function Product({ product }: Props) {
	const dispatch = useDispatch();
	const addItemToBasket = (item: Product) => {
		toast.success(`${item.title} Added to basket`, {
			position: "bottom-center",
			iconTheme: {
				primary: "#7e22ce",
				secondary: "#FFFAEE",
			},
		});
		dispatch(addToBasket(item));
	};
	return (
		<div className="flex h-fit w-[320px]  flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:p-10">
			<div className="relative h-64 w-full md:h-72">
				<Image
					src={urlFor(product.image[0]).url()}
					layout="fill"
					objectFit="contain"
				/>
			</div>
			<div className="flex flex-1 items-center justify-between space-x-3">
				<div className="space-y-2 text-xl text-white md:text-2xl">
					<p>{product.title}</p>
					<p>${product.price}</p>
				</div>

				<div
					className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
					onClick={() => addItemToBasket(product)}
				>
					<AiOutlineShoppingCart className="h-8 w-8 text-white" />
				</div>
			</div>
		</div>
	);
}

export default Product;
