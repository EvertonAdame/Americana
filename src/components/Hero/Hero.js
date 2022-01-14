import React, { useRef, useEffect } from 'react';
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { LeftSection, ItypedDiv, TextStyled } from './HeroStyles';
import { init } from "ityped";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import AOS from 'aos';



const Hero = () => {
  const images = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));

  useEffect(() => {
    AOS.init();
  }, [])

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 120,
      strings: ["Campus", "Quadras", "Laboratórios", "Administrativo"],
    });

  }, []);

  return (


    <>
      <Section nopadding>
        <SectionDivider divider />
        <SectionTitle>
        <span ref={textRef}></span>
        </SectionTitle>
        <LeftSection>
          <ItypedDiv>
          
            
           
            
          </ItypedDiv>
          <Carousel
            canAutoPlay={true}
            hasSizeButton={false}
            isAutoPlaying={true}
            hasMediaButton={false}
            hasLeftButton={false}
            hasRightButton={false}
            hasCaptions={false}
            hasIndexBoard={false}
            hasCaptionsAtMax={false}
            images={images} style={{ height: 400, width: '100%' }}
          />


        </LeftSection>

      </Section>

    </>
  )



};

export default Hero;