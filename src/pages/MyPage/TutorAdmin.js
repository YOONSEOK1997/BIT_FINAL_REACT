import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const TutorAdmin = () => {
  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <MypageContent>
        <Title>튜터 어드민</Title>
        <AdminContent></AdminContent>
      </MypageContent>
    </Wrapper>
  );
};

export default TutorAdmin;

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

const Title = styled.div`
  font-size: 28px;
  width: 150px;
  height: 50px;
  margin-left: 40%;
  line-height: 50px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AdminContent = styled.div`
  width: 800px;
  height: 1000px;
  border: 1px solid gray;
  margin-top: 30px;
`;
