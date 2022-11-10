import Link from 'next/link';

import Image from 'next/image';
import brandLogo from '../public/icons/aands.svg';

export default function Navbar() {
	return (
		// NAVBAR
		<div className='navbar'>
			<div className='navbar__brand'>
				<Link href='/'>
						<Image
							src={brandLogo}
							alt="Brand Logo"
						/>
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
						<li>OUR FTEX 22</li>
					</a>
				</ul>
			</nav>
			<Link href='/products'>Our Products</Link>
		</div>
	);
}
