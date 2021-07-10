import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Slider() {
	return (
		<div className={styles.container}>
			<Carousel
				infiniteLoop
				autoPlay
				transitionTime={2000}
				showThumbs={false}
				showIndicators={false}
				showArrows={false}
				showStatus={false}
			>
				<div>
					<Image src='/Screenshot_7.png' width='100%' />
					<p className='legend'>Legend 1</p>
				</div>
				<div>
					<Image src='/Screenshot_2.png' width='100%' />
					<p className='legend'>Legend 2</p>
				</div>

				<div>
					<Image src='/Screenshot_3.png' width='100%' />
					<p className='legend'>Legend 3</p>
				</div>
			</Carousel>
		</div>
	)
}
