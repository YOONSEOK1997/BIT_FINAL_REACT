import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthService from '../../service/auth-service';
import API from '../../config';
import { setToken, setProfile, setNickname } from '../../utils';
import styled from 'styled-components';
import './css/login.css';

const Login = () => {
  const navigate = useNavigate();

  function kakaLogin() {
    window.Kakao.Auth.login({
      //받아오고 싶은 정보
      scope: 'profile_nickname, profile_image',
      //로그인 후 실행되는 코드(res=받아온데이터)
      success: function (res) {
        console.log(res);

        fetch(`${API.join}`, {
          method: 'POST',
          headers: {
            Authorization: res.access_token,
          },
        })
          .then(res => {
            return res.json();
          })
          .then(res => {
            const restoken = res.access_token;
            const profile = res.profile_image;
            const nickname = res.kakao_nickname;
            setToken(restoken);
            setProfile(profile);
            setNickname(nickname);
            goToMain();
          });
      },
    });
  }
  const goToMain = () => {
    alert('로그인에 성공하였습니다.');
    navigate('/');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const url = 'api/authenticate';

    AuthService.login(username, password, { withCredentials: true }).then(
      res => {
        console.log(res);
        localStorage.loginok = 'yes';
        localStorage.username = username;
        window.location.reload(); //새로고침
        const jwttoken = res.token;
        const profile = res.profile;
        const nickname = res.username;
        setToken(jwttoken);
        setProfile(profile);
        setNickname(username);
        goToMain();
      }
    );
  };

  return (
    <LoginSection>
      <LoginBox>
        <div className="login-form">
          <br />
          <form onSubmit={onSubmit}>
            <div className="int-area">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                required
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
              <label>USER NAME</label>
            </div>
            <div className="int-area">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                required
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
              <label>PASSWORD</label>
            </div>
            <div className="btn-area">
              <button type="submit">LOGIN</button>
            </div>
            <div className="caption">
              <a href="/">Forgot Password?</a>
            </div>
            <br />
            <br />
          </form>
        </div>
        <KaKaoBtn type="button" onClick={kakaLogin}>
          <KakaoLoginImg
            alt="카카오로그인이미지"
            src="/images/kakao_login_medium_wide.png"
          />
        </KaKaoBtn>
      </LoginBox>
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.section`
  min-height: calc(100vh - 500px);
  padding: 130px 0 200px;
  text-align: center;
  ${props => props.theme.wrapper};
`;

const LoginBox = styled.div`
  width: 420px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #eee;
`;

const KaKaoBtn = styled.button`
  border: none;
  background-color: white;
`;

const KakaoLoginImg = styled.img`
  margin: 5px 0;
  &:hover {
    cursor: pointer;
  }
`;
