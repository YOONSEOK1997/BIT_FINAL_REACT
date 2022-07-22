import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthService from '../../service/auth-service';
import API from '../../config';
import { setToken, setProfile, setNickname } from '../../utils';
import styled from 'styled-components';
import './css/register.css';
import img1 from './image/profile.jpg';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { appendErrors, useForm } from 'react-hook-form';
import { getValue } from '@testing-library/user-event/dist/utils';

const Register = () => {
  const navi = useNavigate();
  // const [data, setData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   profile: '',
  // });

  //HOOK FORM
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setValue,
    getValues,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async data => {
    //await new Promise(r => setTimeout(r, 1000));
    console.log(data, errors);

    if (!btnOk) {
      alert('아이디 중복체크를 해주세요');
      return;
    }

    const signupurl = 'http://localhost:9009/api/signup';
    axios.post(signupurl, data).then(res => {
      console.log(data);
    });
  };

  //---------프로필 사진 관련
  const [profile, setProfile] = useState(); //img1
  const photoInput = useRef();
  const imgChange = () => {
    photoInput.current.click();
  };

  let uploadUrl = 'http://localhost:9009/api/upload';
  let photoUrl = 'http://localhost:9009/save/';

  //이미지 업로드
  const imageUpload = e => {
    const uploadFile = e.target.files[0];
    const imageFile = new FormData();
    imageFile.append('uploadFile', uploadFile);

    axios({
      method: 'post',
      url: uploadUrl,
      data: imageFile,
      headers: { 'content-Type': 'multipart/form-data' },
    })
      .then(res => {
        setProfile(res.data);
      })
      .catch(err => {
        alert(err);
      });
  };

  // 비밀번호 확인
  const password = useRef();
  password.current = watch('password');
  const userName = getValues('username');
  //-----Username 중복체크
  const [btnOk, setBtnOk] = useState(false);
  const onIdJungbok = () => {
    console.log(userName);
    const url = 'http://localhost:9009/api/usernamecheck?username=' + userName;
    axios.get(url).then(res => {
      if (res.data === 0) {
        setBtnOk(true);
        alert('가입 가능한 아이디입니다.');
      } else {
        setBtnOk(false);
        alert('이미 가입되어있는아이디 입니다.');
      }
    });
  };

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
            <div className="profileimg">
              <img alt="" src={photoUrl + profile} className="user_profile" />
              <input type="hidden" {...register('profile')}>
                {profile}
              </input>
            </div>
            <div className="photo_icon">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                style={{ color: '#03d85e' }}
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  multiple
                  onChange={imageUpload}
                />
                <PhotoCamera />
              </IconButton>
            </div>
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
                // onChange={e => {
                //   //setUsername(e.target.value);
                //   console.log(data.username);
                // }}
                {...register('username', {
                  minLength: {
                    value: 5,
                    message: '5글자 이상 입력해주세요',
                  },
                  pattern: {
                    value: /^[A-za-z0-9가-힣]{3,10}$/,
                    message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
                  },
                })}
              />
              <label>USER NAME</label>
            </div>
            {errors.username && (
              <div className="regis-error">{errors.username.message}</div>
            )}
            <Button
              size="small"
              onClick={onIdJungbok}
              className="jungbok-button"
              style={{ color: 'gray', marginLeft: '270px' }}
              startIcon={<CheckCircleOutlineIcon />}
            >
              중복확인
            </Button>
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
                // onChange={e => {
                //   //setEmail(e.target.value);
                // }}
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
                {...register('password')}
              />
              <label>PASSWORD</label>
            </div>
            <div className="int-area1">
              <input
                type="password"
                autoComplete="off"
                required
                {...register('password_confirm', {
                  required: '비밀번호를 한번 더해주세요',
                  validate: value => value === password.current,
                  onChange: () => {
                    trigger('password_confirm');
                  },
                  onBlur: () => {
                    trigger('password_confirm');
                  },
                })}
              />
              {errors.password_confirm && (
                <p>{errors.password_confirm.message}</p>
              )}
              {errors.password_confirm &&
                errors.password_confirm.type === 'validate' && (
                  <p>비밀번호가 일치하지 않습니다.</p>
                )}
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
  width: 400px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #eee;
`;
