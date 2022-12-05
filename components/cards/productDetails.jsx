import Image from 'next/image';
import { productDetails } from '../../data/details';

export default function ProductDetails() {
	return (
		<>
			{productDetails.map((details, key) => {
        return (
				<div className='details' key={key}>
					<Image
            src={details.img}
            alt={details.alt}
            width={100}
            height={100}
          />
          <h3>{details.product}</h3>
          <p>{details.description}</p>
				</div>
        )
			})}
		</>
	);
}
