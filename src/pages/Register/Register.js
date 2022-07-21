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

const Register = () => {
  const navi = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    emailok: false,
  });
  //데이터 전송
  const onDataChange = e => {
    const { name, value } = e.target;
    //이벤트 발생 name이 pass일 경우 무조건 passOk는 false
    if (name === 'pass') setPassOk(false);
    setData({
      ...data,
      [name]: value,
    });
  };
  //HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async data => {
    await new Promise(r => setTimeout(r, 1000));
    alert(JSON.stringify(data));
    console.log(data, errors);

    if (!btnOk) {
      alert('아이디 중복체크를 해주세요');
      return;
    }
  };

  //---------프로필 사진 관련
  const [profile, setProfile] = useState(''); //img1
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

  //-----비밀번호 확인
  const [passOk, setPassOk] = useState(false);
  const onPassChange = e => {
    const { value } = e.target;
    if (value === data.password) setPassOk(true);
    else setPassOk(false);
  };

  //-----Username 중복체크
  const [btnOk, setBtnOk] = useState(false);
  const onIdJungbok = () => {
    const url =
      'http://localhost:9009/api/usernamecheck?username=' + data.username;
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
            <div className="profileimg">
              <img alt="" src={photoUrl + profile} className="user_profile" />
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
                onChange={onDataChange}
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
                onChange={onDataChange}
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
                onChange={onDataChange}
              />
              <label>PASSWORD</label>
            </div>
            <div className="int-area1">
              <input
                type="password"
                autoComplete="off"
                required
                onChange={onPassChange}
              />
              <label>PASSWORD</label>
              <span className="regis-error">{passOk ? '일치합니다' : ''}</span>
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
