import Link from 'next/link';

export default function Navbar() {
	return (
		// NAVBAR
		<div className='navbar'>
			<div className='navbar__brand'>
				<Link href='/'>
					<h2>A&S</h2>
				</Link>
			</div>
			<nav className='navbar__nav'>
				<ul className='navbar__list'>
					<a href='#story'>
						<li>OUR STORY</li>
					</a>
					<a href='#services'>
						<li>OUR SERVICES</li>
					</a>
					<a href='#ftex'>
						<li>OUR FTEX '22</li>
					</a>
				</ul>
			</nav>
			<Link href='/products'>Our Products</Link>
		</div>
	);
}
