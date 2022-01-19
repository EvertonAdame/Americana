import styled from 'styled-components';


export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  padding: 0 5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
  }
`;


export const ItypedDiv = styled.div`
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  width: 100%;
  background: url('/images/fachada-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  
  ::before{
  content: '';
  display: block;
  -webkit-filter: brightness(0.5);
  -moz-filter: brightness(0.5);
  -ms-filter: brightness(0.5);
  -o-filter:brightness(0.5);
  filter:  brightness(0.5);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  z-index: 0;
  }
   
  ::after{
    content: '';
    background: black;
    height: 200px;
    position: absolute;
  }

`

export const TextStyled = styled.p`
  text-align: justify;

`