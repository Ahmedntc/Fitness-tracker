import styled from "styled-components";


export const Menu = styled.nav`
    display: flex;
    height: 50px;
    background-color: white;
    align-items: center;
    justify-content: space-around;
    `;


export const Container = styled.div`
    display:flex;
    flex-direction: ${props => props.direc || 'row'};
    justify-content: ${props => props.justify || 'center'};
    gap: 24px;
    width: 100%;
    align-items: center;    
    
    `;


export const Cards = styled.div`
    display: flex;
    flex-direction: column;


    `;



  



export const ContainerCaixa = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: 100%;
  justify-content: center;
  gap: 24px;
  align-items: center;
`;

export const CenterDiv = styled.div`
  margin-top: 10rem;
`;
