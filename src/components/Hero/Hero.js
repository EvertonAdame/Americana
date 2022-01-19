import React, { useRef, useEffect } from 'react';
import { Section, SectionTitle, SectionDivider, SectionText } from '../../styles/GlobalComponents';
import { LeftSection, ItypedDiv,  } from './HeroStyles';
import { init } from "ityped";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import AOS from 'aos';



const Hero = () => {
  const images = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => ({
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
          Conheça nossa estrutura
        </SectionTitle>

        <LeftSection>
          <ItypedDiv>

            <SectionTitle>
              <span ref={textRef}></span>
            </SectionTitle>
            <SectionText>
              Teste Texto
            </SectionText>
            <SectionText>
              Teste Texto
            </SectionText>




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