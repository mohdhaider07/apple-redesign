import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
// Redux
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Toaster reverseOrder={true} />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
