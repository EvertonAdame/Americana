import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { AiFillInstagram, AiFillLinkedin, AiFillTrophy,  AiFillYoutube} from 'react-icons/ai';
import { FcDiploma1 } from 'react-icons/fc';
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Informações importantes</SectionTitle>
    <SectionText>
     A unip está com vestibular aberto para as modalidades semipresencial FLEX ou digital EAD.<br/>
     Cursos superiores de graduação tradicional e pós graduação.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FcDiploma1 size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Seu diploma vale muito
          </ListTitle>
          <ListParagraph>
            Entre as instituições de ensino mais
            importante consideradas pelos brasileiros.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <AiFillLinkedin size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Empregabilidade garantida</ListTitle>
          <ListParagraph>
           Uma das cinco instituições de ensino mais 
           procurada em todo o mundo no Linkedin
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiFillTrophy size="3rem" /> 
        </picture>
        <ListContainer>
          <ListTitle>8º anos consecutivos</ListTitle>
          <ListParagraph>
            A Universidade particular em
            1º lugar no mercado profissional.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
