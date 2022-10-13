import type { GetServerSideProps } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
// AUTH sessions
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
//headlessui
import Tabs from "../components/molecules/Tabs";
import Basket from "../components/Basket";
// image
import { logo } from "../components/Image";
interface Props {
	categories: Category[];
	products: Product[];
	session: Session | null;
}

const Home = ({ categories, products }: Props) => {
	// console.log(products);
	const showProducts = (index: number) => {
		return products
			.filter((product) => product.category._ref === categories[index]._id)
			.map((product) => <Product key={product._id} product={product} />);
	};
	return (
		<div className="">
			<Head>
				<title>Apple -Re Design</title>
				<link rel="icon" href="./image/logo/apple-logo.png" />
			</Head>
			<Basket />
			<Navbar />
			<main className="relative h-[200vh] bg-[#E7ECEE]">
				<Landing />
			</main>
			<section className="relative z-40 -mt-[100vh] min-h-screen  overflow-hidden bg-[#1B1B1B]">
				<div className="space-y-8 py-8">
					<h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
						New Promos
					</h1>
					<div className="text-white">
						<Tabs categories={categories} showProducts={showProducts} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
//Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async (
	context
) => {
	const categories: Category[] = await fetchCategories();
	const products: Product[] = await fetchProducts();
	const session = await getSession(context);
	return {
		props: {
			categories,
			products,
			session,
		},
	};
};
