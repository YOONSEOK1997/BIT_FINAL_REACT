import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MypageMain.css';
import { Link, useNavigate } from 'react-router-dom';
import profile_image from '../../image/3.PNG';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import '../Register/css/register.css';

const MypageMain = () => {
  const navi = useNavigate();
  const [show, setShow] = useState(1);

  const [data, setData] = useState('');
  const getprofileurl = 'http://localhost:9009/api/getprofile';

  const username = localStorage.getItem('username');
  const profile = localStorage.getItem('profile');

  const onProfileReceive = () => {
    axios.get(getprofileurl + '?username=' + username).then(response => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    onProfileReceive();
  }, []);

  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <div className="mypage_profile">
        <div className="profile_pic">
          <img src={profile} alt="" />
        </div>
        <div className="profile_info">
          <div className="profile_labels">
            <div className="profile_label1">이름</div>
            <div className="profile_label2">{data.realname}</div>
            <div className="profile_label1">이메일</div>
            <div className="profile_label2">{data.email}</div>
            <br />
          </div>
        </div>
        <div className="profile_buttons">
          <button>
            <a href="/register_re">수정</a>
          </button>
          <button>탈퇴</button>
        </div>
      </div>
      {/* mypage_profile 닫힘 */}

      <div className="mypage_lists">
        {/* 유저 아이디 */}
        <div className="int-area1">
          <input type="text" name="username" id="username" required />
          <label>USER ID</label>
        </div>

        {/* 유저 네임 */}
        <div className="int-area1">
          <input type="text" name="realname" id="realname" required />
          <label>USER NAME</label>
        </div>

        {/* 이메일 */}
        <div className="int-area1">
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
          <label>E-MAIL</label>
        </div>
        {/* 비밀번호 */}
        <div className="int-area1">
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            required
          />
          <label>PASSWORD</label>
        </div>
      </div>
      {/* 진행중/완료 목록 div */}
    </Wrapper>
    /* 전체 div 닫힘 */
  );
};

export default MypageMain;

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
  margin-top: 40px;
  position: relative;
  padding-bottom: 20px;
  height: 1000px;
  border: 1px solid gray;
`;
