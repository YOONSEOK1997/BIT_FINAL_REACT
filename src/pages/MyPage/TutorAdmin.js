import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const TutorAdmin = () => {
  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <MypageContent>
        <Title1>튜터 페이지</Title1>
        <Ment>
          튜터 신청으로 누구나 <b style={{ color: '#03d85e' }}>오늘, 한강</b>{' '}
          클래스의 튜터가 되어보세요!👩‍🏫
        </Ment>
        <AdminContent>
          <Title2>내가 진행중인 클래스</Title2>
          <ClassCard>
            {/* 하나의 카드 반복문 */}
            <div className="each_class1">
              <img
                alt=""
                src={'../class/classImage/002.png'}
                className="listimg1"
              />

              <div className="class_location1">
                <LocationOnIcon
                  style={{
                    fontSize: '20px',
                    height: '20px',
                  }}
                />
                (잠원) 한강공원
              </div>

              <div className="class_title2">
                <div className="class_title_name1" style={{ float: 'right' }}>
                  (어차저차어기여차 클래스)
                </div>
              </div>

              <div className="list_tutor_name1">
                <div>(김정하) 튜터</div>
              </div>

              <div className="class_numbers1">
                <div className="class_price1">(35,000) 원</div>
                <div className="class_hour1">(총 (30) 시간)</div>
              </div>

              <div className="class_like1">
                <FavoriteBorderIcon
                  style={{
                    fontSize: '20px',
                    color: 'red',
                    height: '20px',
                    display: 'inline-block',
                  }}
                />
                <div className="heart1" style={{ display: 'inline-block' }}>
                  162
                </div>
              </div>
            </div>
          </ClassCard>
          <WhoisAttending>
            <Title3>수강생 목록</Title3>
            <PeopleList>
              <OneLine>
                {/* 표 맨 윗줄 */}
                <Number>🍀</Number>
                <ClassName>클래스명</ClassName>
                <UserName>이름</UserName>
                <UserId>아이디</UserId>
                <Date>신청 날짜</Date>
              </OneLine>

              <OneLine1>
                {/* 하나의 반복문 : 한줄  */}
                <Number1>1</Number1>
                <ClassName1>[원데이] 비눗방울 불어제끼기</ClassName1>
                <UserName1>한별</UserName1>
                <UserId1>hanbyeol</UserId1>
                <Date1>2022.07.25</Date1>
              </OneLine1>
            </PeopleList>
          </WhoisAttending>
        </AdminContent>
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
  height: auto;
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
`;

const Title2 = styled.div`
  font-size: 28px;
  width: 250px;
  height: 50px;
  margin-left: 270px;
  line-height: 50px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title3 = styled.div`
  font-size: 28px;
  width: 150px;
  height: 50px;
  margin-left: 330px;
  line-height: 50px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Ment = styled.div`
  font-size: 18px;
  width: 500px;
  margin-left: 150px;
  color: #999999;
  font-family: Noto Sans KR;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 35px;
  border-bottom: 0.5px solid #999999;
  padding-bottom: 20px;
`;

const AdminContent = styled.div`
  width: 800px;
  height: 1000px;
  border: 1px solid gray;
  margin-top: 30px;
`;

const ClassCard = styled.div`
  width: 800px;
  height: 450px;
  border: 1px solid gray;
`;

const WhoisAttending = styled.div`
  width: 800px;
  height: 600px;
  border-top: 700px;
  border: 1px solid gray;
`;

const PeopleList = styled.div`
  width: 800px;
  height: 500px;
  border: 1px solid gray;
  margin-top: 20px;
`;

const OneLine = styled.div`
  border: 1px solid gray;
  width: 750px;
  height: 40px;
  margin-left: 20px;
  font-size: 20px;
`;

const Number = styled.div`
  display: inline-block;
  border: 1px solid gray;
  width: 80px;
  line-height: 40px;
  height: 40px;
  text-align: center;
`;

const ClassName = styled.div`
  display: inline-block;
  border: 1px solid gray;
  height: 40px;
  width: 330px;
  line-height: 40px;
  text-align: center;
`;

const UserName = styled.div`
  display: inline-block;
  border: 1px solid gray;
  height: 40px;
  width: 100px;
  line-height: 40px;
  text-align: center;
`;

const UserId = styled.div`
  display: inline-block;
  border: 1px solid gray;
  height: 40px;
  width: 100px;
  line-height: 40px;
  text-align: center;
`;

const Date = styled.div`
  display: inline-block;
  border: 1px solid gray;
  height: 40px;
  line-height: 40px;
  width: 130px;
  text-align: center;
`;

const OneLine1 = styled.div`
  border: 1px solid gray;
  width: 750px;
  height: 40px;
  margin-left: 20px;
  font-size: 20px;
`;

const Number1 = styled.div`
  display: inline-block;
  border: 1px solid gray;
  width: 80px;
  line-height: 40px;
  height: 40px;
  text-align: center;
`;

const ClassName1 = styled.div`
  display: inline-block;
  border: 1px solid gray;
  height: 40px;
  width: 330px;
  line-height: 40px;
  text-align: center;
`;

const UserName1 = styled.div`
  display: inline-block;
  border: 1px solid gray;
  height: 40px;
  width: 100px;
  line-height: 40px;
  text-align: center;
`;

const UserId1 = styled.div`
  display: inline-block;
  border: 1px solid gray;
  height: 40px;
  width: 100px;
  line-height: 40px;
  text-align: center;
`;

const Date1 = styled.div`
  display: inline-block;
  border: 1px solid gray;
  height: 40px;
  line-height: 40px;
  width: 130px;
  text-align: center;
`;
