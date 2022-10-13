import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
//next auth

import { SessionProvider } from "next-auth/react";
// Redux
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: any) => {
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<Toaster reverseOrder={true} />
				<Component {...pageProps} />
			</Provider>
		</SessionProvider>
	);
};

export default MyApp;
