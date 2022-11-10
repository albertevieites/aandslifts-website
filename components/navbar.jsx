import Link from 'next/link';

import Image from 'next/image';
import brandLogo from '../public/icons/aands.svg';

export default function Navbar() {
	return (
		// NAVBAR
		<div className='navbar'>
			<div className='navbar__brand'>
				<Link href='/'>
					<Image src={brandLogo} alt='Brand Logo' />
				</Link>
			</div>
			<nav className='navbar__nav'>
				<ul className='navbar__list'>
					<li>
						<a href='#story'> OUR STORY</a>
					</li>
					<li>
						<a href='#services'>OUR SERVICES</a>
					</li>
					<li>
						<a href='#ftex'>FTEX 22</a>
					</li>
				</ul>
			</nav>
			<Link className='products__link' href='/products'>Our Products</Link>
		</div>
	);
}
