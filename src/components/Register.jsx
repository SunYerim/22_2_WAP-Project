import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Input type="text" placeholder="nickname" />
      <Input type="text" placeholder="status" />
    </Container>
  );
};

const Container = styled.div`
  width: 512px;
  height: 600px;
  position: relative;
  background: pink;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto; /*페이지 중앙에 나타나도록 설정*/
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  width: 60%;
  height: 50px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & + & {
    margin-top: 1rem;
  }
`;

export default Register;
