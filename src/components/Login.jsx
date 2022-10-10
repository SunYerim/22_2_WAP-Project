import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Form>
        <Title>LOGIN</Title>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  border: 1px solid black;
  width: 70%;
  height: 50px;
  & + & {
    margin-top: 1rem;
  }
`;
export default Login;
