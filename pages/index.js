import Link from "next/link";

import Image from "next/image";
import nayarLogo from "../public/icons/nayar.png";

import SocialCard from "../components/socialCard";
import TeamCard from "../components/teamCard";

export default function Home() {
	return (
		<>
			{/* HERO SECTION 🚀 */}
			<section className='hero'>
				<h1>Leading solutions in lift maintenance</h1>
				<p>
					We offer a wide range of products and services to maintain your lift
					in the best condition.
				</p>
			</section>

			{/* PARTNERS SECTION */}
			<section className='partners'>
				<Image
					src={nayarLogo}
					alt="Nayar Logo"
				/>
				<span>Exclusive UK Distributors Of Nayar Products</span>
			</section>

			{/* FEATURES & BENEFITS */}
			<section className="features">
				<h2>Features & Benefits</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima atque similique natus, nihil neque et molestiae expedita voluptates fugiat earum culpa consectetur dolorum eum optio corrupti exercitationem ipsa tempore.</p>
			</section>

			{/* SOCIAL PROOF */}
			<section className="social">
				<h2>Social Proof</h2>
				<SocialCard />
			</section>

			{/* FAQ */}
			<section className="faq">
				<h2>FAQ</h2>
				<h3>Question</h3>
				<p>Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt hic aspernatur aut molestiae molestias corporis minus quam officia repellat delectus voluptatibus, quibusdam qui error recusandae, fugit doloremque modi totam.</p>
			</section>

			{/* OUR STORY */}
			<section id="story" className="story">
				<h2>Our Story</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non aspernatur corrupti sed aliquid inventore possimus laboriosam quae, placeat dolorum nulla consequatur facilis officiis veniam harum vitae necessitatibus in quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non culpa explicabo obcaecati facere, eius, possimus ab reiciendis odio aliquid in eos officiis adipisci animi ipsam soluta voluptatum, reprehenderit iure?</p>
			</section>

			{/* TEAM */}
			<section className="team">
				<h2>Meet Our Team</h2>
				<TeamCard />
			</section>

			{/* LAST */}
			<section className="last">
				<Link href='/products'>Our Products</Link>
			</section>
		</>
	);
}
