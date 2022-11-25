import Link from 'next/link';

import Image from 'next/image';
import nayarLogo from '../public/icons/nayar-white.jpeg';

import SocialCard from '../components/socialCard';
import TeamCard from '../components/teamCard';

export default function Home() {
	return (
		<>
			{/* A&S address for Google Maps */}
			{/* 51.5378089830618, -0.7068501217028575 */}

			{/* HERO SECTION 🚀 */}
			<section className='hero'>
				<div className='hero__message'>
					<h1>Leading</h1>
					<h1>solutions for</h1>
					<h1>
						the <span>lift</span> industry
					</h1>
					<p>
						We offer a wide range of <span>products</span> and services to
						maintain your <span>lift </span>
						in the best condition.
					</p>
				</div>
				<Link className='hero__btn' href='/products'>
					<span>OUR PRODUCTS</span>
				</Link>
			</section>

			{/* PARTNERS SECTION */}
			<section className='partners'>
				<div className='partners__container'>
					<Link
						className='partners__link'
						href='https://www.nayarsystems.com/en/'
					>
						<Image src={nayarLogo} alt='Nayar Logo' />
						<span>Nayar UK representatives</span>
					</Link>
				</div>
			</section>

			{/* FEATURES & BENEFITS */}
			<section className='features'>
				<h2>Features & Benefits</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima
					atque similique natus, nihil neque et molestiae expedita voluptates
					fugiat earum culpa consectetur dolorum eum optio corrupti
					exercitationem ipsa tempore.
				</p>
			</section>

			{/* SOCIAL PROOF */}
			<section className='social'>
				<h2>We are Social</h2>
				<div className='social__grid'>
					<SocialCard className='social__card' />
				</div>
			</section>

			{/* OUR STORY */}
			<section id='story' className='story'>
				<h2>Our Story (so far...)</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non
					aspernatur corrupti sed aliquid inventore possimus laboriosam quae,
					placeat dolorum nulla consequatur facilis officiis veniam harum vitae
					necessitatibus in quidem. Lorem ipsum dolor sit amet consectetur
					adipisicing elit.
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
					saepe aspernatur architecto qui necessitatibus sapiente modi numquam?
					Nisi excepturi, vitae nulla velit suscipit officia necessitatibus cum,
					incidunt enim, nesciunt maiores!
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cumque
					doloremque error quae omnis dolorem ipsa impedit minima maiores
					expedita! Sapiente reprehenderit necessitatibus consectetur aperiam
					officia possimus animi, ut laboriosam.
				</p>
			</section>

			{/* TEAM */}
			<section className='team'>
				<h2>The Team</h2>
				<TeamCard />
			</section>

			{/* LAST */}
			<section className='last'>
				<div className='last__container'>
					<h2>Bulletproof your lift</h2>
					<h2>for the future</h2>
					<p>
						Join thousands of people buying lift sutff over the world while see
						their smilie faces
					</p>
					<Link className='last__btn' href='/products'>
						<span>OUR PRODUCTS</span>
					</Link>
				</div>
			</section>
		</>
	);
}
