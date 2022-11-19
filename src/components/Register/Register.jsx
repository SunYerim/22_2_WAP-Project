import React, { useState, useRouter, useCallback } from "react";
import {
  useNavigate,
  BrowserRouter as router,
  Route,
  Link,
} from "react-router-dom";
import S from "./styled";
import axios from "axios";

const Register = () => {
  // 닉네임, 아이디 확인
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /*
  // 유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isId, setIsId] = useState(false);
  */

  const onNickNameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onPasswordCheckHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  // password 일치여부 확인
  const onCheck = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호 확인을 다시 한 번 해주십시오.");
    } else if (password === confirmPassword) {
      return alert("비밀번호가 일치합니다. 회원가입을 진행해주세요.");
    }
  };

  // 회원가입 후 로그인 페이지 이동
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/Login");
    return alert("Register Success !!");
  };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDerault();
      try {
        await axios
          .post({
            /*Register_users_url,*/
            nickname: nickname,
            id: id,
          })
          .then((res) => {
            console.log("response:", res);
            if (res.status === 201) {
              router.push("/sign_up/profile_start");
            }
          });
      } catch (err) {
        console.error(err);
      }
    },
    [id, nickname]
  );

  return (
    <S.Container>
      <S.Title>Register Page</S.Title>
      <S.Input
        type="text"
        value={nickname}
        onChange={onNickNameHandler}
        placeholder="nickname"
      />
      <S.Input type="text" placeholder="ID" value={id} onChange={onIdHandler} />
      <S.Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordHandler}
      />

      <S.Input
        type="password"
        placeholder="check password one more"
        value={confirmPassword}
        onChange={onPasswordCheckHandler}
      />
      <S.PasswordCheck onClick={onCheck}>비밀번호 재확인</S.PasswordCheck>

      <S.SubmitButton type="submit" onClick={navigateToLogin}>
        "Register!"
      </S.SubmitButton>
    </S.Container>
  );
};

export default Register;
