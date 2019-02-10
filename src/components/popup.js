import React from "react";
import styled from "styled-components";
import Button from "./button";

const PopupContainer = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Popup = styled("div")`
  width: 30%;
  height: 20%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const PopupHeader = styled("h1")`
  color: #070707;
  margin-bottom: 20px;
`;

export default ({ togglePopup }) => (
  <PopupContainer>
    <Popup>
      <PopupHeader>Hello! this is impulse</PopupHeader>
      <Button onClick={togglePopup}>Close</Button>
    </Popup>
  </PopupContainer>
);
