import type { GetServerSideProps, NextPage } from "next";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<div className="">
			<Navbar />
			<main className="relative h-[200vh] bg-[#E7ECEE]">
				<Landing />
			</main>
			<section className="relative z-40 -mt-[100vh] min-h-screen  overflow-hidden bg-[#1B1B1B]">
				<div className="py-8">
					<h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
						New Promos
					</h1>
				</div>
			</section>
		</div>
	);
};

export default Home;

const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	};
};
