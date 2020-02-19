import styled from "styled-components";
import bus from '../../assets/img/bus.jpg';

export const BackgroungImageBus = styled.div `
  background: url(${bus}) center center fixed;
  display: flex;
  height: 720px;
`;

export const ContainerLogin = styled.div `
  justify-content: center;
  display: flex;
  width: 100%;  
  position: absolute;
  z-index: 99;
  top: 150px;
`;

export const SectionHome = styled.div `
  font-family: Lobster; font-size: 28px;
`;