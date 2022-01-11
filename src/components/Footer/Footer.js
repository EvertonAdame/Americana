import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Button from '../../styles/GlobalComponents/Button';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, EmailContainer, InputEmail } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
              <EmailContainer>
            <label for="email" className="label--text">Quer saber mais? Coloque seu email
              e entraremos em contato</label>
            <InputEmail
              placeholder="Seu melhor email"
              type="email"
              id="email"
              name="email"
              color="#fff"
            />
            <Button>Enviar</Button>
          </EmailContainer>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Localização</LinkTitle>
          <LinkItem><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5834484636985!2d-47.345507985404375!3d-22.74371903778964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89958da193621%3A0xd3b49fef1cbebbc1!2sUNIP%20Americana%20-%20Polo%20Campos%20Salles!5e0!3m2!1spt-BR!2sbr!4v1641921802346!5m2!1spt-BR!2sbr" width="200" height="100" allowfullscreen="" loading="lazy"></iframe></LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Contato</LinkTitle>
          <LinkItem href="tel:19971670560">(19) 971670560</LinkItem>
          <LinkItem href="tel:314-343-3432">(19) 3861-6102</LinkItem>
        </LinkColumn>
        
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:?@?.com">
            camposalles@email.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Polo Campos Salles Todos direitos reservados</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://google.com">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillYoutube size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
