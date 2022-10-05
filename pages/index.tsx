import type { NextPage } from "next";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<Landing />
			</main>
		</>
	);
};

export default Home;
