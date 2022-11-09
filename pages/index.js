import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Home() {
	const boxRef = useRef(null);

	useEffect(() => {
		gsap.to('.box', {
			rotation: 27,
			x: 400,
			duration: 1,
		});
	});
	return (
		<>
			<div ref={boxRef} className='box'>
				<h1>Leading solutions in lift maintenance</h1>
			</div>
		</>
	);
}
