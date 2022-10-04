import React from "react";
import Image from "next/image";
import Link from "next/link";
// image
import { logo } from "./Image";
// icons
import { AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
	const session = false;
	return (
		<header className="sticky top-0 z-30 flex items-center justify-between bg-[#E7ECEE] p-4">
			<div className="flex items-center justify-center md:w-1/5">
				<Link href="/">
					<div className="headerLink relative  h-10 w-5">
						<Image
							src={logo}
							layout="fill"
							objectFit="contain"
							alt="Logo"
						/>
					</div>
				</Link>
			</div>
			<div className=" hidden flex-1 items-center justify-center space-x-8 md:flex ">
				<a className="headerLink">Product</a>
				<a className="headerLink">Explore</a>
				<a className="headerLink">Support</a>
				<a className="headerLink">Business</a>
			</div>
			<div className="flex items-center justify-center gap-x-4 md:w-1/5">
				<AiOutlineSearch className="headerIcon" />
				<Link href="/checkout">
					<div className="relative">
						<BsHandbag className="headerIcon" />
						<span className="absolute -top-1 -right-1 flex h-4 w-4  items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white ">
							5
						</span>
					</div>
				</Link>
				{session ? (
					<Image
						src={
							"https://www.freeiconspng.com/thumbs/account-icon/account-icon-8.png"
						}
						width={34}
						height={34}
						objectFit="contain"
					/>
				) : (
					<BiUser className="headerIcon" />
				)}
			</div>
		</header>
	);
};

export default Navbar;
