import { useRouter } from 'next/router';

import Head from 'next/head';
import Footer from './navigation/footer';
import Navbar from './navigation/navbar';

export default function Layout({ children }) {
	const router = useRouter();
	if (router.pathname === '/')
		return (
			<div className='layout'>
				<Head>
					<title>A&S Lifts</title>
				</Head>
				<Navbar />
				{children}
				<Footer />
			</div>
		)
	else {
		return (
			<>
				<Head>
					<title>A&S Lifts</title>
				</Head>
				<Navbar />
				{children}
			</>
		);
	}
}
