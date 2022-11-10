import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { socialData } from '../data/social';

export default function SocialCard() {
	const [loading, setLoading] = useState(false);

	// Load this skeleton effect on mount
	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 5000);
		// Cancel the timer while unmounting the effect
		return () => clearTimeout(timer);
	},[]);

	return (
		<div className='social__grid'>
			{socialData.map((data, key) => {
				return (
					<div key={key} className='social__card'>
						<p className='social__body'>{loading ? <Skeleton height={120} /> : data.comment}</p>
						<div className='social__user'>{loading ? <Skeleton width={40} height={40}/> :
						<Image
							className='social__image'
							src={data.img}
							alt={data.alt}
							width={50}
							height={50}
						/>
						}
						<h4 className='social__name'>{loading ? <Skeleton width={228} height={40}/> :data.name}</h4>
						</div>
					</div>
				);
			})}
		</div>
	)
}
