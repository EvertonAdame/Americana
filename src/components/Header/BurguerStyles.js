import styled from 'styled-components';


export const Cabecalho = styled.header`
    display:flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    transition: 1s all ease;
    padding-left: 3rem;
    position: fixed;
    z-index: 10;
    height: 6rem;
    align-items: center;

`

export const ImgLogo = styled.img`
  width:90px;
  height: 90px;
  @media(max-width: 768px){
    margin-left: 3rem;
  }


`
export const SocialContainer = styled.div`
  display: flex;
  position: fixed;
  right: 10px;


  @media(min-width: 769px){
    top: 18px;
    right: 15px;
  }
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 18px;
  left: 20px;
  z-index: 20;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  
  li {
    
    padding: 1rem 1rem;
    text-align: right;
    cursor: pointer;
    font-weight: bold;
    @media(max-width: 768px) {
      border-bottom: 1px solid;
      padding: 2.5rem 1rem;
    }
   
  }
  li:hover{

    transition: 0.8s ease;
    color: #000;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: white;
    }
  }
  @media(min-width: 769px){
    margin-left: 3rem;
  }
`;