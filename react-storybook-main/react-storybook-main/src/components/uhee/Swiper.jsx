import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

function BaseSwiper({ images }) {
	const [image, setImage] = useState([]);
    
	useEffect(() => {
		setImage(images);
	}, []);

	return (
		<Swiper slidesPerView={1} pagination={{ clickable: true }}>
			{image.map((item, index) => (
				<SwiperSlide key={index}>
					<img src={item.src} alt={item.alt} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default BaseSwiper;
