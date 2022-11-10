import Layout from '../components/layout';
import '../styles/styles.scss';

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
