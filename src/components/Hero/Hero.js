import React from 'react';
import { Section, SectionText, SectionTitle  } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useRouter } from 'next/router';


const Hero = () => {

  const { push } = useRouter();

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Conheça o<br />
            polo Campos Salles
          </SectionTitle>
          <SectionText>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </SectionText>
          <Button onClick={() => push('/cursos')}>Ver cursos</Button>
     

        </LeftSection>
      </Section>
    </>
  )



};

export default Hero;