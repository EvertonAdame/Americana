import styled from 'styled-components';

export const Img = styled.img`
  width:150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
padding: 1rem;
place-items: center;
column-gap: 1rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  height: 100%;
  box-shadow: 1px 1px 10px #afa0ff;
  text-align: center;
  width: 220px;


  .card-info {
    display: flex;
    justify-content: center;

}
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;



export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1px;
  color: #00f0f6;
  font-size: ${(props) => props.title ? '1.7rem' : '1.7rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 30px;
  color: #e4e6e7;
  line-height: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: .05rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`