import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";

export default function ImageSlider() {
	const responsive = {
		desktop: { breakpoint: {max:3000, min:1025}, items: 2, slidesToSlide: 1},
		tablet: { breakpoint: {max:1024, min:768}, items: 2, slidesToSlide: 1},
		mobile: { breakpoint: {max:767, min:0}, items: 1, slidesToSlide: 1},
	}
	const sliderImages = [
		{ url: image1 },
		{ url: image2 },
		{ url: image3 },
		{ url: image4 },
		{ url: image5 }
	]

	return (
		<div className="parent">
			<Carousel 
				responsive={responsive}
				autoPlay={true}
				autoPlaySpeed={3000}
				swipeable={true}
				draggable={true}
				showDots={true}
				infinite={true}
				partialVisbile={false}
				dotListClass="custom-dot-list-style"
			>
				{sliderImages.map((image, index) => (
					<div className="slider" key={index}>
						<img
							src={image.url}
							alt={`slide-${index+1}`}
							style={{
								width: "100%",
								height: "auto",
								maxHeight: "500px",
								objectFit: "cover",
							}}
						/>
					</div>
				))}
			</Carousel>
		</div>
	)
}