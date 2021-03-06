import { ContextProvider } from '../components/Context';

export default function MyApp({ Component, pageProps }) {
	return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	);
}