import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const MypageClasses = () => {
  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <MypageContent>
        <Title1>수강중인 클래스</Title1>
        <Ment1>
          내가 좋아요한 클래스들을 모아볼 수 있습니다. 클래스 신청까지{' '}
          <b style={{ color: '#03d85e' }}>오늘, 한강</b>과 함께 해보세요!😄
        </Ment1>
        <Title2>수강 종료된 클래스</Title2>
        <Ment2>
          내가 좋아요한 클래스들을 모아볼 수 있습니다. 클래스 신청까지{' '}
          <b style={{ color: '#03d85e' }}>오늘, 한강</b>과 함께 해보세요!😄
        </Ment2>
      </MypageContent>
    </Wrapper>
  );
};

export default MypageClasses;

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
  margin-top: 40px;
  position: relative;
  padding-bottom: 20px;
  height: 2000px;
  border: 1px solid gray;
`;

const MypageContent = styled.div`
  border: 1px solid gray;
  margin-top: -230px;
  margin-left: 30px;
  width: 800px;
  height: 1000px;
  float: right;
  display: inline-block;
`;

const Title1 = styled.div`
  font-size: 28px;
  width: 150px;
  height: 50px;
  margin-left: 40%;
  line-height: 50px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid gray;
`;

const Ment1 = styled.div`
  font-size: 18px;
  color: #dbdbdb;
  font-family: Noto Sans KR;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid gray;
`;

const Title2 = styled.div`
  font-size: 28px;
  width: 150px;
  height: 50px;
  margin-left: 40%;
  line-height: 50px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid gray;
`;

const Ment2 = styled.div`
  font-size: 18px;
  color: #dbdbdb;
  font-family: Noto Sans KR;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid gray;
`;
