import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
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

const ClassList = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const filterDom = useRef();

  //백엔드에서 받아올 리스트 데이터변수
  const [data, setData] = useState([]);

  //필터된거 해당하는 데이터변수
  const [cardList, setCardList] = useState([]);

  const [clickedCategory, setClickedCategory] = useState();

  //체크됨 => url
  const [clickedCheckList, setClickedCheckList] = useState([]);

  const [isContentsShowed, setIsContentsShowed] = useState(false);

  //url 선언
  let class_alllistUrl = 'http://localhost:9009/class/list';
  let class_photoUrl = 'http://localhost:9009/save/';

  //처음에 불러오는 url
  const list = () => {
    axios.get(class_alllistUrl).then(res => {
      setData(res.data);
      // getCardListData(res.data);
    });
  };

  // 필터된 정보 + cardList state에 저장
  const getCardListData = useCallback(async () => {
    const res = await fetch(`${BASE_URL}/main/search${search}`);
    const data = await res.json();

    setCardList(data.result);
  }, [search]);

  useEffect(() => {
    list();
    getCardListData();
  }, [getCardListData]);

  //filter 체크한대로 url 만들어줌
  const makeQueryString = () => {
    const queryString = clickedCheckList
      .map(({ id, content, sortType }) => {
        return sortType === 'class_location' || sortType === 'class_category'
          ? `${sortType}_id=${parseInt(id) + 1}`
          : `${sortType}=${content}`;
      })
      .map((item, idx) => {
        return idx === 0 ? item : '&' + item;
      })
      .join('');

    navigate(`?${queryString}`);
  };

  //클릭된 체크리스트 정보 clickedCheckList에 저장
  const handleCheckList = (e, content, idx, sort_type) => {
    e.target.checked
      ? setClickedCheckList([
          ...clickedCheckList,
          { id: idx, content, sortType: sort_type },
        ])
      : setClickedCheckList(
          clickedCheckList.filter(list => list.content !== content)
        );
  };

  //custom hook
  //카테고리 부분 바깥을 눌렀을 때 체크리스트가 보이지 않게끔 기능 구현
  useOutsideClick(filterDom, () => setIsContentsShowed(false));

  return (
    <Wrapper>
      {/* 필터 부분 */}
      <div className="row">
        <FilterList ref={filterDom}>
          {FILTER_CATEGORYS.map(({ sort_type, title, contents }, idx) => {
            return (
              <Filter key={idx}>
                <Category
                  className={clickedCategory === idx && 'show'}
                  onClick={() => {
                    setClickedCategory(idx);
                    setIsContentsShowed(true);
                  }}
                >
                  {title}
                </Category>
                <Contents
                  className={
                    clickedCategory === idx && isContentsShowed && 'show'
                  }
                >
                  {contents.map((content, idx) => (
                    <Content
                      key={idx}
                      onClick={e => handleCheckList(e, content, idx, sort_type)}
                    >
                      <input type="checkbox" />
                      {content}
                    </Content>
                  ))}

                  <Btns>
                    <Button
                      bgColor={theme.green}
                      onClick={() => {
                        makeQueryString();
                        setIsContentsShowed(false);
                      }}
                    >
                      필터 적용
                    </Button>
                  </Btns>
                </Contents>
              </Filter>
            );
          })}
        </FilterList>
      </div>

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
          data.map((data, index) => (
            <div className="each_class" key={index}>
              <img
                alt=""
                src={class_photoUrl + data.class_photo1}
                className="listimg"
              />

              <div className="class_location">
                <div style={{ display: 'inline-block' }}>
                  <LocationOnIcon
                    style={{ fontSize: '20px', height: '20px' }}
                  />
                </div>
                <data className="class_location_name">
                  {data.class_location} 한강공원
                </data>
              </div>

              <div className="class_title1">
                <data className="class_title_name" style={{ float: 'right' }}>
                  {data.class_name}
                </data>
              </div>

              <div className="list_tutor_name">
                <data>{data.tutor_id} 튜터</data>
              </div>

              <div className="class_numbers">
                <data className="class_price">{data.class_price} 원</data>
                <data className="class_hour">(총 {data.class_hour}시간)</data>
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
                <data className="heart" style={{ display: 'inline-block' }}>
                  162
                </data>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default ClassList;

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
  margin-top: 40px;
  position: relative;
  padding-bottom: 20px;
  height: 2000px;
`;

const FILTER_CATEGORYS = [
  {
    sort_type: 'class_location',
    title: '한강, 어디?',
    contents: ['반포', '잠실', '이촌', '여의도', '난지', '뚝섬'],
  },
  {
    sort_type: 'class_category',
    title: '카테고리',
    contents: ['스냅사진', '스포츠', '댄스', '뮤직', '드로잉'],
  },
];

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

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
