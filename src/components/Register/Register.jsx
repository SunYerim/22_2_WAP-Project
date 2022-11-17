import React, { useState, useRouter, useCallback } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import S from "./styled";
import axios from "axios";

const Register = () => {
  // 닉네임, 아이디, 비밀번호, 비밀번호 확인
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 오류메시지 상태저장
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await axios
          .post(
            //REGISTER_USERS_URL,
            {
              username: nickname,
              password: password,
              id: id,
            }
          )
          .then((res) => {
            console.log("response:", res);
            if (res.status === 201) {
              router.push("/register/profile_start");
            }
          });
      } catch (error) {
        console.error(error);
      }
    },
    [id, nickname, password, router]
  );

  // nickname
  const onChangeNickName = useCallback((e) => {
    setNickname(e.target.value);
    setNicknameMessage("올바른 닉네임 형식입니다 :)");
    setIsNickname(true);
  }, []);

  // id
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
    if (e.target.value.length < 5) {
      setIdMessage("5글자 이상으로 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("올바른 id 형식입니다! :)");
      setIsId(true);
    }
  }, []);

  // password
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsPassword(true);
    }
  }, []);

  // password check
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setConfirmPassword(passwordConfirmCurrent);
      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다 : )");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage(
          "비밀번호가 틀립니다. 다시 한 번 확인해주세요."
        );
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  return (
    <>
      <S.Container onSubmit={onSubmit}>
        <S.Input
          type="text"
          value={nickname}
          onChange={onChangeNickName}
          placeholder="nickname"
        />
        <S.Input
          type="text"
          placeholder="id"
          value={id}
          onChange={onChangeId}
        />
        <S.Input
          type="password"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
        />
        <S.Input
          type="password"
          placeholder="check password one more"
          value={confirmPassword}
          onChange={onChangePasswordConfirm}
        />
        <S.SubmitButton type="submit" onChange={onSubmit}>
          "Register!"
        </S.SubmitButton>
      </S.Container>
    </>
  );
};

export default Register;
