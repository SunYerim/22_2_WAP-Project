import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  left: 50%;
  transform: translate(-50%, 0);
  background: #f7f7f7;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto; /*페이지 중앙에 나타나도록 설정*/
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: 700;
  background-color: #d266f0;
  border-radius: 64px;
  color: white;
  margin-bottom: 16px;
  text-align: center;
  cursor: pointer;
`;

const Title = styled.div`
  margin-top: 67px;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #262626;
`;

const PasswordCheck = styled.button``;

const S = {
  Input,
  Container,
  SubmitButton,
  Title,
  PasswordCheck,
};

export default S;
