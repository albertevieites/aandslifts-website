import Image from 'next/image';

import { socialData } from '../../data/social';

export default function SocialCard() {
	return (
		<>
			{socialData.map((data, key) => {
				return (
					<div key={key} className='social__card'>
						<div className='social__comment'>
							<Image
								className='social__quote'
								src='/../icons/quote.svg'
								alt='quote'
								width={20}
								height={20}
							/>
							<p>{data.comment}</p>
						</div>

						<div className='social__user'>
							<div className='social__user--persona'>
								<Image
									className='social__image'
									src={data.img}
									alt={data.alt}
									width={50}
									height={50}
								/>
								<h5 className='social__name'>{data.name}</h5>
							</div>

							<div className='social__user--social'>
								<Image
									src={data.socialImg}
									alt='google icon'
									width={15}
									height={15}
								/>
								<Image
									src={data.stars && data.stars}
									alt='stars'
									width={60}
									height={16}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
