import styled from "styled-components";



export const Titulo = styled.h1`
  font-size: ${props => props.size || "32px"};
  color: ${props => props.color || "black"};
  line-weight: ${props => props.weight || "1.5rem"};
  `;

export const Subtitulo = styled.h2`
    font-size: ${props => props.size || "24px"};
    color: ${props => props.color || "white"};
    line-weight: ${props => props.weight || "1.5rem"};
    `;

export const Subtitulo2 = styled.h3`
    font-size: ${props => props.size || "20px"};
    color: ${props => props.color || "black"};
    line-weight: ${props => props.weight || "1.5rem"};
    `;

export const Paragrafo = styled.p`
    font-size: ${props => props.size || "16px"};
    color: ${props => props.color || "black"};
    line-weight: ${props => props.weight || "1.5rem"};
    `;

export const Input = styled.input`
    width: 700px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #000;
    padding: 8px;
    margin: 8px 0;
    `;




