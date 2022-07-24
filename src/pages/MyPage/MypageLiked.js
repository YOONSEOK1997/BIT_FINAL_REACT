import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MypageLiked = () => {
  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <MypageContent>
        <Title>찜한 클래스</Title>
        <Ment>
          내가 좋아요한 클래스들을 모아볼 수 있습니다. 클래스 신청까지{' '}
          <b style={{ color: '#03d85e' }}>오늘, 한강</b>과 함께 해보세요!😄
        </Ment>
        <LikedClasses>
          {/* 하나의 카드 반복문 : (어쩌구) 값만 {div.머시기} 로 뽑아오세요*/}
          <Card>
            <div className="each_class">
              <img
                alt=""
                src={'../class/classImage/002.png'}
                className="listimg"
              />

              <div className="class_location">
                <LocationOnIcon
                  style={{
                    fontSize: '20px',
                    height: '20px',
                    display: 'inline-block',
                  }}
                />
                <div className="class_location_name">(잠원) 한강공원</div>
              </div>

              <div className="class_title1">
                <div className="class_title_name" style={{ float: 'right' }}>
                  (어차저차어기여차 클래스)
                </div>
              </div>

              <div className="list_tutor_name">
                <div>(김정하) 튜터</div>
              </div>

              <div className="class_numbers">
                <div className="class_price">(35,000) 원</div>
                <div className="class_hour">(총 (30) 시간)</div>
              </div>

              <div className="class_like">
                <FavoriteBorderIcon
                  style={{
                    fontSize: '20px',
                    color: 'red',
                    height: '20px',
                    display: 'inline-block',
                  }}
                />
                <div className="heart" style={{ display: 'inline-block' }}>
                  162
                </div>
              </div>
            </div>
          </Card>
        </LikedClasses>
      </MypageContent>
    </Wrapper>
  );
};

export default MypageLiked;

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

const Ment = styled.div`
  font-size: 18px;
  color: #dbdbdb;
  font-family: Noto Sans KR;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 0.5px solid #999999;
  padding-bottom: 20px;
  width: 700px;
  margin-left: 45px;
`;

const LikedClasses = styled.div`
  border: 1px solid gray;
  width: 800px;
  height: 1000px;
`;

const Card = styled.div`
  margin-top: 10px;
`;
