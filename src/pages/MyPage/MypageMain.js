import React, { useState } from 'react';
import './MypageMain.css';
import { useNavigate } from 'react-router-dom';
import profile_image from '../../image/3.PNG';
import styled from 'styled-components';

const MypageMain = () => {
  const navi = useNavigate();
  const [show, setShow] = useState(1);

  return (
    <Wrapper>
      <div className="mypage_header"></div>

      <div className="mypage_sidebar">
        <div className="mypage">My Page</div>
        <li>결제 내역</li>
        <li>나의 찜</li>
        <li>모임</li>
        <li>챌린지</li>
        <li>클래스</li>

        {/* {show===1?<MypageMain/>:show===2?<MypagePayment/>:show===3?<MypageLikes/>
                    :show===4?<MypageMoim/>:show===5?<MypageChallenge/>
                    :<MypageClass/>} */}
      </div>
      <div className="mypage_profile">
        <div className="profile_pic">
          <img src={profile_image} alt="" />
        </div>
        <div className="profile_info">
          <div className="profile_labels">
            <div className="profile_label1">이름</div>
            <div className="profile_label2">김정하</div>
            <br />
            <div className="profile_label1">예치금</div>
            <div className="profile_label2">50,000원</div>
          </div>
        </div>
        <div className="profile_buttons">
          <button>수정</button>
          <button>탈퇴</button>
        </div>
      </div>
      {/* mypage_profile 닫힘 */}

      <div className="mypage_lists">
        <div className="mypage_moim_list"></div>
        <div className="mypage_chal_list">하하</div>
        <div className="mypage_class_list">호호</div>
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
  height: 2000px;
  border: 1px solid gray;
`;
