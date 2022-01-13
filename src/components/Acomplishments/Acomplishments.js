import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AiOutlineCheck } from "react-icons/ai";

const data = [
  { number: "Ambições", text: 'Mudar futuros'},
  { number: "Capacidade", text: 'Construir caminhos', },
  { number: "Crescer", text: 'Ampliar nosso network', },
  { number: "Adiquirir", text: 'Ampliar nossos cursos', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Nossas metas</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number} <AiOutlineCheck size="1rem"/></BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
