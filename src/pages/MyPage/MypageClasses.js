import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MypageClasses = () => {
  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <MypageContent>
        <Title1>수강중인 클래스</Title1>
        <Ment1>현재 수강중인 클래스 목록입니다 🏃</Ment1>
        <Cards1>
          {/* 하나의 카드 반복문 */}
          <Card1>
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
          </Card1>
          {/* 하나의 반복문 끝.. 아래는 걍 박아넣은거*/}
          <Card1>
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
          </Card1>
          <Card1>
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
          </Card1>
        </Cards1>
        <Title2>수강 종료된 클래스</Title2>
        <Ment2>내가 수강한 클래스들 입니다 🏁</Ment2>
        <Cards2>
          <Card2>
            {/* 하나의 카드 반복문 */}
            <div className="each_class_end">
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
          </Card2>
        </Cards2>
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
  height: 1500px;
  float: right;
  display: inline-block;
`;

const Title1 = styled.div`
  font-size: 28px;
  width: 200px;
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
  width: 230px;
  height: 50px;
  margin-left: 38%;
  line-height: 50px;
  font-weight: 600;
  margin-top: 100px;
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

const Cards1 = styled.div`
  border: 1px solid gray;
  width: 800px;
  height: 400px;
`;

const Cards2 = styled.div`
  border: 1px solid gray;
  width: 800px;
  height: 400px;
`;

const Card1 = styled.div`
  margin-top: 10px;
`;

const Card2 = styled.div`
  margin-top: 10px;
`;
