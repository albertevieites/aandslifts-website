import Head from 'next/head';
import Navbar from './navigation/navbar';
import Footer from './navigation/footer';

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Head>
				<title>A&S Lifts</title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}