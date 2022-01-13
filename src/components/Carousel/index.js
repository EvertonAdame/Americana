import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CarouselContainer, CarouselImg } from '../../styles/GlobalComponents';

const ImageSlider = () => {
    return (
        <CarouselContainer>
        <Carousel
            showThumbs={false}
            showStatus={false}
        >
            <CarouselContainer>
                <CarouselImg src="/images/carousel1.jpg" />

            </CarouselContainer>
            <CarouselContainer>
                <CarouselImg src="images/carousel2.jpg" />

            </CarouselContainer>
            <CarouselContainer>
                <CarouselImg src="images/carousel3.jpg" />

            </CarouselContainer>
        </Carousel>
        </CarouselContainer>
    )
}

export default ImageSlider;

