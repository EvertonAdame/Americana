import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, SpanLogo } from './HeaderStyles';





const Header = () => {


  const { push } = useRouter();


  return (

    <Container>
      <Div1>
        <div className="container--logo" onClick={() => push('/')}>
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <img width="80px" height="80px" src="images/logo-unip.svg" /> <SpanLogo>Campos Salles</SpanLogo>
          </a>
        </div>
      </Div1>
      <Div2>
        <li>
          <div onClick={() => push('/cursos')}>
            <NavLink>Cursos</NavLink>
          </div>
        </li>
        <li>
          <Link href="#">
            <NavLink>Ambiente Virtual</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>Sobre</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>

  )
};

export default Header;
