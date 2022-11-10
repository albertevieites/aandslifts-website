import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonCard() {
	return (
		<section>
			<p><Skeleton height={120} /></p>
      <div><Skeleton width={20} /></div>
		</section>
	);
}
