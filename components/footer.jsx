import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer__image'>
				<Image
					className='footer__map'
					src='/./images/assets/map.png'
					alt='map'
					width={400}
					height={300}
				/>
			</div>

			<div className='footer__here'>
				<h2>{"We're here"}</h2>
				<p>Sheephouse Road</p>
				<p>Maidenhead SL6 8HA</p>
				<p>London</p>
			</div>

			<div className='footer__talk'>
				<h2>{"Let's talk."}</h2>
				<Link href='mailto:info@aandslifts.co.uk' className='footer__email'>info@aandslifts.co.uk</Link>
				<div className='footer__btns'>
					<Link href='tel:+447394699196'>
						<span>Call Jose</span>
					</Link>
					<Link href='tel:+447507200480'>
						<span>Call David</span>
					</Link>
				</div>
				<div className='footer__social'>
					<span>Follow Us:</span>
					<div className='footer__icons'>
						<Link href='https://goo.gl/maps/JeoGgA34CGTzHfs8A'>
							<Image
								className='footer__google'
								src='/./icons/google.svg'
								alt='google icon'
								width={15}
								height={15}
							/>
						</Link>
						<Link href='https://www.facebook.com/people/AS-Lifts/100055158621181/'>
							<Image
								className='footer__facebook'
								src='/./icons/facebook.svg'
								alt='facebook icon'
								width={15}
								height={15}
							/>
						</Link>
						<Link href='https://www.linkedin.com/in/a-and-s-lifts-ltd-%F0%9F%9B%97-34a5a91a5/'>
							<Image
								className='footer__linkedin'
								src='/./icons/linkedin.svg'
								alt='linkedin icon'
								width={15}
								height={15}
							/>
						</Link>
					</div>
				</div>
			</div>

			<div className='footer__sitemap'>
				<div className='footer__links'>
					<Link href='/'>Home</Link>
					<Link href='#partners'>Partners</Link>
					<Link href='#features'>Features and Benefits</Link>
					<Link href='#story'>Our Story</Link>
					<Link href='#social'>Social</Link>
					<Link href='#team'>Our Team</Link>
					<Link href='/products'>Products</Link>
					<Link href='/contact'>Contact</Link>
				</div>
				<div className='footer__copy'>Copyright © 2022 A&S LIFTS</div>
			</div>
		</div>
	);
}
