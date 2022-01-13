import React, { useState, useEffect} from 'react';
import Burguer from './Burguer';
import { Cabecalho, SocialContainer } from './BurguerStyles';
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { SocialIcons  } from './HeaderStyles';

const Header = () => {


  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY>=80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
 
  }, []);



  return (


    <Cabecalho scrollNav={scrollNav}>
          <Burguer />
      <SocialContainer>
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
      </SocialContainer>
 
    </Cabecalho>

  );
}

export default Header;
