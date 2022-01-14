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
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  width: 100%;


`

export const TextStyled = styled.p`
  text-align: justify;

`