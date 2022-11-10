import Image from 'next/image';

import { socialData } from '../data/social';

export default function SocialCard() {
	return (
		<div className='social__grid'>
			{socialData.map((data, key) => {
				return (
					<div key={key} className="social__card">
						<p className='social__body'>{data.comment}</p>
						<div className='social__user'>
							<Image
								className='social__image'
								src={data.img}
								alt={data.alt}
								width={50}
								height={50}
							/>
							<h4 className='social__name'>{data.name}</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
}
