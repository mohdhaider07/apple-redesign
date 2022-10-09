import type { NextPage } from "next";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<main className="h-[200vh] bg-[#E7ECEE]">
				<Landing />
			</main>
		</>
	);
};

export default Home;
