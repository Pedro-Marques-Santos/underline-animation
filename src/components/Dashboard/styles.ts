import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Underline = styled.div`
  color: wheat;
  padding: 5px;
  font-size: 30px;
  cursor: pointer;

  ::after {
    content: "";
    height: 2px;
    width: 0%;
    background-color: black;
    display: block;
    transition: 0.5s ease-in-out;
  }

  :hover::after {
    content: "";
    height: 2px;
    width: 100%;
    background-color: black;
    display: block;
  }
`;
