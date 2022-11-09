import Image from 'next/image';

import { socialData } from '../data/social';

export default function SocialCard() {
	return (
		<div className='social--card'>
			{socialData.map((data, key) => {
				return (
					<div key={key}>
						<p className='social--card__body'>{data.comment}</p>
						<div className='social--card__user'>
							<Image
								className='social--card__image'
								src={data.img}
								alt={data.alt}
								width={50}
								height={50}
							/>
							<h4 className='social--card__name'>{data.name}</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
}
