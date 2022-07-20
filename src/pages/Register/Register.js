import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthService from '../../service/auth-service';
import API from '../../config';
import { setToken, setProfile, setNickname } from '../../utils';
import styled from 'styled-components';
import './css/register.css';
import img1 from './image/profile.jpg';
import { useForm } from 'react-hook-form';

const Register = () => {
  //HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    console.log(data);
  };

  //프로필 사진 관련
  const [profile, setProfile] = useState(img1);
  const photoInput = useRef();
  const imgChange = () => {
    photoInput.current.click();
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <LoginSection>
      <LoginBox>
        <div className="login-form">
          <div className="regis_title">
            간편하게 가입하고
            <br />
            다양한 튜터를 만나보세요.
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <br />
            <div className="profile" onClick={imgChange}>
              <img
                src={profile}
                alt=""
                style={{ display: 'block', margin: 'auto', width: '150px' }}
              />
            </div>
            <input
              type="file"
              multiple
              ref={photoInput}
              style={{ display: 'none' }}
            />
            <br />
            <div className="int-area1">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                required
                aria-invalid={
                  !isDirty ? undefined : errors.username ? 'true' : 'false'
                }
                onChange={e => {
                  setUsername(e.target.value);
                }}
                {...register('username', {
                  minLength: {
                    value: 5,
                    message: '5글자 이상 입력해주세요',
                  },
                })}
              />
              <label>USER NAME</label>
            </div>
            {errors.email && (
              <div className="regis-error">{errors.username.message}</div>
            )}
            <div className="int-area1">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                required
                aria-invalid={
                  !isDirty ? undefined : errors.email ? 'true' : 'false'
                }
                onChange={e => {
                  setEmail(e.target.value);
                }}
                {...register('email', {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식에 맞게 입력해주세요',
                  },
                })}
              />
              <label>E-MAIL</label>
            </div>
            {errors.email && (
              <div className="regis-error">{errors.email.message}</div>
            )}
            <div className="int-area1">
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
            <div className="int-area1">
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
            <div className="btn-area1">
              <button type="submit" disabled={isSubmitting}>
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </LoginBox>
    </LoginSection>
  );
};

export default Register;

const LoginSection = styled.section`
  min-height: calc(100vh - 500px);
  padding: 130px 0 200px;
  text-align: center;
  ${props => props.theme.wrapper};
`;

const LoginBox = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #eee;
`;
