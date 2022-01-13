import React from 'react';
import { AiFillPhone, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlinePushpin } from 'react-icons/ai';
import Button from '../../styles/GlobalComponents/Button';
import { RiWhatsappFill } from 'react-icons/ri';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, ItemContainer, LinkItemMap, Slogan, SocialContainer, SocialIconsContainer, EmailContainer, InputEmail } from './FooterStyles';

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
          <LinkItem>
          Av. Campos Sales 
          </LinkItem>
          <LinkItem>
           987  Jardim Girassol
          </LinkItem>
          <LinkItem>
         Americana-SP 13465-590
          </LinkItem>
          <LinkItemMap>
          <a href="https://goo.gl/maps/dXhKxzrGYxBGnJ4y7">Visualizar no mapa</a><AiOutlinePushpin size="3rem"/>
          </LinkItemMap>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Contato</LinkTitle>
          <ItemContainer>
          <LinkItem href="tel:19971670560">(19) 97167-0560</LinkItem><div className="mb2"><RiWhatsappFill size="2rem" className=""/></div>
          </ItemContainer>
          <ItemContainer>
          <LinkItem href="tel:314-343-3432">(19) 3861-6102</LinkItem><div className="mb2"><AiFillPhone size="2rem"/></div>
          </ItemContainer>
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
