import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './ClassList.css';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { BASE_URL } from '../../config';

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
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';

const ClassList3 = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const filterDom = useRef();
  const navi = useNavigate();
  const likestate = useRef([]);
  const { message } = useParams();
  const [data, setData] = useState([]);

  //url 선언
  const SPRING_URL = process.env.REACT_APP_SPRING_URL;
  let class_searchUrl = 'http://localhost:9009/class/search?message=' + message;
  let class_alllistUrl = 'http://localhost:9009/class/alllist';
  let class_photoUrl = 'http://localhost:9009/save/';
  let likeUrl = process.env.REACT_APP_SPRING_URL + 'like/check';

  const list = () => {
    axios.get(class_searchUrl).then(res => {
      setData(res.data);
      console.log(data);
    });
  };

  useEffect(() => {
    list();
    console.log(message);
  }, [message]);

  return (
    <Wrapper>
      <div className="ClassHeader">클래스입니다 헤더 이미지는 수정예정</div>

      <div className="radiofilter" style={{ float: 'right' }}>
        <label>
          <input type="radio" className="radio1" name="theme" />
          ✨최신순
        </label>
        <label style={{ marginLeft: '8px' }}>
          <input type="radio" className="radio1" name="theme" />
          🔥인기순
        </label>
        <label style={{ marginLeft: '8px' }}>
          <input type="radio" className="radio1" name="theme" />
          ⭐평점순
        </label>
      </div>

      <div className="listdiv">
        {/* 하나의 카드 반복문 */}
        {data &&
          data.map((data, idx) => (
            <div className="each_class" key={idx}>
              <img
                alt=""
                src={class_photoUrl + data.class_photo1}
                className="listimg"
                onClick={() => {
                  navi(`/class/detail/${data.class_num}`);
                }}
              />

              <div className="class_location" style={{ color: '#7814DC' }}>
                <div style={{ display: 'inline-block', float: 'left' }}>
                  <LocationOnIcon
                    style={{ fontSize: '18px', height: '20px' }}
                  />
                </div>
                <div className="class_location_name">
                  <data>{data.class_location} 한강공원</data>
                </div>
              </div>

              <div className="class_title1">
                <data
                  className="class_title_name"
                  style={{ float: 'right' }}
                  onClick={() => {
                    navi(`/class/detail/${data.class_num}`);
                  }}
                >
                  {data.class_name}
                </data>
              </div>

              <div className="list_tutor_name">
                <data>{data.tutor_id} 튜터</data>
              </div>

              <div className="class_numbers">
                <data className="class_price">{data.class_price}원</data>
                <data className="class_hour">(총 {data.class_hour}시간)</data>
              </div>

              <div
                className="class_like"
                onClick={() => {
                  axios
                    .post(likeUrl, {
                      like_class_num: data.class_num,
                      like_user_name: localStorage.username,
                    })
                    .then(res => {
                      console.log(res.data);
                      if (res.data === 1) likestate.current[idx] = '❤️';
                      else likestate.current[idx] = '🤍';

                      for (let i = 0; i < data.length; i++) {}
                      console.log(
                        '인덱스' + idx + '의 값:' + likestate.current[idx]
                      );
                      console.log(likestate);
                    });
                }}
              >
                {data.like_user_name === null ? '🤍' : '❤️'}
                {/* <data className="heart" style={{ display: 'inline-block' }}>
                  162
                </data> */}
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default ClassList3;

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
  margin-top: 40px;
  position: relative;
  padding-bottom: 20px;
  height: 3500px;
`;

const FILTER_CATEGORYS = [
  {
    sort_type: 'location',
    title: '한강, 어디?',
    contents: ['반포', '잠실', '이촌', '여의도', '난지', '뚝섬'],
  },
  {
    sort_type: 'category',
    title: '카테고리',
    contents: ['스냅사진', '스포츠', '댄스', '뮤직', '드로잉'],
  },
];

const FilterList = styled.ul`
  display: flex;
`;

const Filter = styled.li`
  position: relative;
`;

const Category = styled.div`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &.show {
    background-color: #e6e9ed;
  }
`;

const Contents = styled.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 37px;
  left: 5px;
  width: 240px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: block;
  }
`;

const Content = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;

const Btns = styled.div`
  padding-top: 20px;
  text-align: right;
  border-top: 1px solid #dbdbdb;
`;

const Button = styled.button`
  background-color: ${props => props.bgColor};
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;
