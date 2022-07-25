import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './MypageMain.css';
import { Link, useNavigate } from 'react-router-dom';
import profile_image from '../../image/3.PNG';
import styled from 'styled-components';
import Sidebar from './Sidebar';
//import '../Register/css/register.css';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './MypageMain.css';
import PassChangeModal from './PassChange/PassChangeModal';

const MypageMain = () => {
  const navi = useNavigate();
  const [show, setShow] = useState(1);

  const [data, setData] = useState('');
  const getprofileurl = 'http://localhost:9009/api/getprofile';

  const username = localStorage.getItem('username');
  const profile1 = localStorage.getItem('profile');

  const onProfileReceive = () => {
    axios.get(getprofileurl + '?username=' + username).then(response => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    onProfileReceive();
  }, []);

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

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <div className="mypage_profile">
        <div className="profileimg2">
          <img alt="" src={profile1} className="user_profile" />
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
        <div className="profile_info">
          <div className="profile_lable_bottom">
            <span className="profile_label1">USER ID</span>
            <span className="profile_label2">{data.username}</span>
          </div>
          <div className="profile_lable_bottom">
            <span className="profile_label1">E-MAIL</span>
            <span className="profile_label2">{data.email}</span>
          </div>
          <br />
        </div>
        <div className="profile_buttons">
          <button>
            <a href="/register_re">수정</a>
          </button>
          <button onClick={openModal}>비밀번호 변경</button>
          <PassChangeModal
            open={modal}
            close={closeModal}
            header="비밀번호 변경하기"
          />
          <button>탈퇴</button>
        </div>
      </div>
      {/* mypage_profile 닫힘 */}

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
