import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ClassList.css';
import styled from 'styled-components';

import ClassListRowItem from './ClassListRowItem';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import BrushIcon from '@mui/icons-material/Brush';
import TextsmsIcon from '@mui/icons-material/Textsms'; //댓
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@mui/icons-material/Pets';
import img1 from '../../image/2.PNG';
import { LeftCircleFilled } from '@ant-design/icons';

const ClassList = () => {
  const navi = useNavigate();

  //백엔드에서 받아올 리스트 데이터변수
  const [data, setData] = useState([]);

  //필터링한거에 해당하는 데이터
  const [filterData, setFilterData] = useState([]);

  //카테고리
  const [category, setCategory] = useState();

  //필터 기능
  const onChangeCategory = ({ currentTarget }) => {
    setCategory(currentTarget.value);
  };

  //데이터 가져오는 함수
  const list = () => {
    let class_alllisturl = 'http://localhost:9009/class/list';

    axios.get(class_alllisturl).then(res => {
      setData(res.data);
      // setFilterData(res.data.list);
      console.log(res.data);
    });
  };

  useEffect(() => {
    list();
  }, []);

  useEffect(() => {
    const newData = data.filter(a => a.class_category === category);
    setFilterData(newData);
  }, [category]);

  return (
    <Wrapper>
      <div className="row">
        <select className="select1" style={{ width: '150px' }}>
          <option key="class_location" value="장소" disabled>
            장소
          </option>
          <option key="반포 한강공원" value="반포 한강공원">
            반포 한강공원
          </option>
          <option key="잠실 한강공원" value="잠실 한강공원">
            잠실 한강공원
          </option>
          <option key="이촌 한강공원" value="이촌 한강공원">
            이촌 한강공원
          </option>
          <option key="여의도 한강공원" value="여의도 한강공원">
            여의도 한강공원
          </option>
          <option key="난지 한강공원" value="난지 한강공원">
            난지 한강공원
          </option>
          <option key="뚝섬 한강공원" value="뚝섬 한강공원">
            뚝섬 한강공원
          </option>
        </select>
        <select className="select1" style={{ width: '150px' }}>
          -
          <option key="class_category" value="전체">
            전체
          </option>
          <option key="스냅사진" value="스냅사진">
            스냅사진
          </option>
          <option key="스포츠" value="스포츠">
            스포츠
          </option>
          <option key="댄스/뮤직" value="댄스/뮤직">
            댄스/뮤직
          </option>
          <option key="드로잉" value="드로잉">
            드로잉
          </option>
          <option key="펫" value="펫">
            펫
          </option>
        </select>
      </div>
      <div className="ClassHeader">클래스</div>
      <div className="class_cate">
        <div className="box1" onClick={onChangeCategory}>
          <CameraAltIcon
            style={{
              fontSize: '48px',
              marginLeft: '45px',
              marginTop: '23px',
            }}
          />
          <div className="boxtext1">스냅사진</div>
        </div>
        <div className="box1" onClick={onChangeCategory}>
          <SportsHandballIcon
            style={{
              fontSize: '48px',
              marginLeft: '45px',
              marginTop: '23px',
            }}
          />
          <div className="boxtext1">스포츠</div>
        </div>
        <div className="box1" onClick={onChangeCategory}>
          <KitesurfingIcon
            style={{
              fontSize: '48px',
              marginLeft: '45px',
              marginTop: '23px',
            }}
          />
          <div className="boxtext1">댄스/뮤직</div>
        </div>
        <div className="box1" onClick={onChangeCategory}>
          <BrushIcon
            style={{
              fontSize: '48px',
              marginLeft: '45px',
              marginTop: '23px',
            }}
          />
          <div className="boxtext1">드로잉</div>
        </div>
        <div className="box1" onClick={onChangeCategory}>
          <PetsIcon
            style={{
              fontSize: '48px',
              marginLeft: '45px',
              marginTop: '23px',
            }}
          />
          <div className="boxtext1">펫</div>
        </div>
      </div>
      <div className="radiofilter" style={{ float: 'right' }}>
        <label>
          <input type="radio" className="radio1" name="theme" />
          최신순
        </label>
        <label style={{ marginLeft: '15px' }}>
          <input type="radio" className="radio1" name="theme" />
          인기순
        </label>
        <label style={{ marginLeft: '15px' }}>
          <input type="radio" className="radio1" name="theme" />
          평점순
        </label>
      </div>
      <div className="listdiv">
        {/* 하나의 카드 반복문 */}
        {data.list &&
          data.list.map((div, idx) => (
            <div className="classlist">
              <img alt="" src={img1} className="listimg" />
              <div className="class_location">
                <div style={{ display: 'inline-block' }}>
                  <LocationOnIcon
                    style={{ fontSize: '20px', height: '20px' }}
                  />
                </div>
                <span className="class_location_name">
                  {div.class_location}
                </span>
              </div>
              <div className="class_title1">
                <span className="class_title_name" style={{ float: 'right' }}>
                  수업제목이요
                </span>
              </div>
              <div className="tutor_name">
                <span>강사이름이요</span>
              </div>
              <div className="class_price">
                <span className="qweqwe">가격입니다</span>
                <span>총 7시간</span>
              </div>
              <div className="class_like">
                <div>
                  <FavoriteBorderIcon
                    style={{ fontSize: '20px', color: 'red', height: '20px' }}
                  />
                </div>
                <span className="qweqwe">162</span>
              </div>
            </div>
          ))}
      </div>
      <div className="classlist">
        <img alt="" src={img1} className="listimg" />
        <div className="class_location">
          <div style={{ display: 'inline-block' }}>
            <LocationOnIcon style={{ fontSize: '20px', height: '20px' }} />
          </div>
          <span
            className="class_location_name"
            style={{ display: 'inline-block' }}
          >
            뚝섬유원지
          </span>
        </div>
        <div className="class_title1">
          <span className="class_title_name">프로젝트 2주만에 끝내버리기</span>
        </div>
        <div className="list_tutor_name">
          <span>김정하 강사님</span>
        </div>
        <div className="class_price">
          <span className="qweqwe">가격입니다</span>
        </div>
        <div className="class_hour" style={{ display: 'inline-block' }}>
          <span>총 7시간</span>
        </div>
        <div className="class_like">
          <div style={{ display: 'inline-block' }}>
            <FavoriteBorderIcon
              style={{ fontSize: '20px', color: 'red', height: '20px' }}
            />
          </div>
          <span className="class_like_num" style={{ display: 'inline-block' }}>
            162
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClassList;

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
  position : relative;
  padding-bottom: 20px;
  height: 2000px;
  border: 1px solid gray;
`;
