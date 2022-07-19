import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ClassList.css';
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

const ClassList = () => {
  const navi = useNavigate();
  //백엔드에서 받아올 리스트 데이터변수
  const [shopList, setShopList] = useState([]);
  //데이터 가져오는 함수
  const list = () => {
    let url = 'http://localhost:9001/class/list';

    axios.get(url).then(res => {
      //스프링으로부터 받아온 list를 shoplist에 넣기
      setShopList(res.data);
      console.log('len=' + res.data.length);
    });
  };

  //처음 랜더링 시 "딱 한번" 데이터 가져오기
  useEffect(() => {
    //console.log("list");
    list();
  }, []);
  return (
    <div>
      <div className="content_container" style={{ marginLeft: '310px' }}>
        <div className="row">
          <select className="select1" style={{ width: '150px' }}>
            -
            <option key="orange" value="orange">
              전체
            </option>
            <option key="apple" value="apple">
              반포 한강공원
            </option>
            <option key="orange" value="orange">
              잠실 한강공원
            </option>
            <option key="orange" value="orange">
              이촌 한강공원
            </option>
            <option key="orange" value="orange">
              여의도 한강공원
            </option>
            <option key="orange" value="orange">
              난지 한강공원
            </option>
            <option key="orange" value="orange">
              뚝섬 한강공원
            </option>
          </select>
          <select className="select1" style={{ width: '150px' }}>
            -
            <option key="orange" value="orange">
              전체
            </option>
            <option key="apple" value="apple">
              스냅사진
            </option>
            <option key="orange" value="orange">
              스포츠
            </option>
            <option key="orange" value="orange">
              댄스/뮤직
            </option>
            <option key="orange" value="orange">
              드로잉
            </option>
            <option key="orange" value="orange">
              펫
            </option>
          </select>
        </div>
        <div className="category1">클래스</div>
        <div className="class_summ">
          <div className="box1">
            <CameraAltIcon
              style={{
                fontSize: '80px',
                marginLeft: '45px',
                marginTop: '23px',
              }}
            />
            <div className="boxtext1">스냅사진</div>
          </div>
          <div className="box1">
            <SportsHandballIcon
              style={{
                fontSize: '80px',
                marginLeft: '45px',
                marginTop: '23px',
              }}
            />
            <div className="boxtext1">스포츠</div>
          </div>
          <div className="box1">
            <KitesurfingIcon
              style={{
                fontSize: '80px',
                marginLeft: '45px',
                marginTop: '23px',
              }}
            />
            <div className="boxtext1">댄스/뮤직</div>
          </div>
          <div className="box1">
            <BrushIcon
              style={{
                fontSize: '80px',
                marginLeft: '45px',
                marginTop: '23px',
              }}
            />
            <div className="boxtext1">드로잉</div>
          </div>
          <div className="box1">
            <PetsIcon
              style={{
                fontSize: '80px',
                marginLeft: '45px',
                marginTop: '23px',
              }}
            />
            <div className="boxtext1">펫</div>
          </div>
        </div>
        <div className="category4" style={{ float: 'right' }}>
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
          <div className="classlist">
            <img alt="" src={img1} className="listimg" />
            <div className="listrow1">
              <span>
                <LocationOnIcon style={{ fontSize: '20px', height: '20px' }} />
              </span>
              <span className="qweqwe">반포공원</span>
            </div>
            <div className="listrow2">
              <span className="qweqwe">
                [원데이] 한강에서 제트스키 체험하기 (feat. 사진촬영)
              </span>
            </div>
            <div className="listrow3" style={{ marginTop: '3px' }}>
              <span>홍대한 튜터</span>
            </div>
            <div className="listrow4" style={{ marginTop: '0px' }}>
              <span className="qweqwe">88000원 </span>
              <span>(총 8시간)</span>
            </div>
            <div className="listrow5">
              <span>
                <FavoriteBorderIcon
                  style={{ fontSize: '20px', color: 'red', height: '20px' }}
                />
              </span>
              <span className="qweqwe">162</span>
            </div>
          </div>

          <div className="classlist">
            <img alt="" src={img1} className="listimg" />

            <div className="listrow2">
              <span className="qweqwe">
                [원데이] 한강에서 제트스키 체험하기 (feat. 사진촬영)
              </span>
            </div>
            <div className="listrow3" style={{ marginTop: '3px' }}>
              <span>홍대한 튜터</span>
            </div>
            <div className="listrow4" style={{ marginTop: '0px' }}>
              <span className="qweqwe">88000원 </span>
              <span>(총 8시간)</span>
            </div>
            <div className="listrow5">
              <span>
                <FavoriteBorderIcon
                  style={{ fontSize: '20px', color: 'red', height: '20px' }}
                />
              </span>
              <span className="qweqwe">162</span>
              <FavoriteIcon />
            </div>
          </div>
          <div className="classlist">
            <img alt="" src={img1} className="listimg" />

            <div className="listrow2">
              <span className="qweqwe">
                [원데이] 한강에서 제트스키 체험하기 (feat. 사진촬영)
              </span>
            </div>
            <div className="listrow3" style={{ marginTop: '3px' }}>
              <span>홍대한 튜터</span>
            </div>
            <div className="listrow4" style={{ marginTop: '0px' }}>
              <span className="qweqwe">88000원 </span>
              <span>(총 8시간)</span>
            </div>
            <div className="listrow5">
              <span>
                <FavoriteBorderIcon
                  style={{ fontSize: '20px', color: 'red', height: '20px' }}
                />
              </span>
              <span className="qweqwe">162</span>
            </div>
          </div>
          <div className="classlist">
            <img alt="" src={img1} className="listimg" />

            <div className="listrow2">
              <span className="qweqwe">
                [원데이] 한강에서 제트스키 체험하기 (feat. 사진촬영)
              </span>
            </div>
            <div className="listrow3" style={{ marginTop: '3px' }}>
              <span>홍대한 튜터</span>
            </div>
            <div className="listrow4" style={{ marginTop: '0px' }}>
              <span className="qweqwe">88000원 </span>
              <span>(총 8시간)</span>
            </div>
            <div className="listrow5">
              <span>
                <FavoriteBorderIcon
                  style={{ fontSize: '20px', color: 'red', height: '20px' }}
                />
              </span>
              <span className="qweqwe">162</span>
            </div>
          </div>
          <div className="classlist">
            <img alt="" src={img1} className="listimg" />

            <div className="listrow2">
              <span className="qweqwe">
                [원데이] 한강에서 제트스키 체험하기 (feat. 사진촬영)
              </span>
            </div>
            <div className="listrow3" style={{ marginTop: '3px' }}>
              <span>홍대한 튜터</span>
            </div>
            <div className="listrow4" style={{ marginTop: '0px' }}>
              <span className="qweqwe">88000원 </span>
              <span>(총 8시간)</span>
            </div>
            <div className="listrow5">
              <span>
                <FavoriteBorderIcon
                  style={{ fontSize: '20px', color: 'red', height: '20px' }}
                />
              </span>
              <span className="qweqwe">162</span>
            </div>
          </div>
          <div className="classlist">
            <img alt="" src={img1} className="listimg" />

            <div className="listrow2">
              <span className="qweqwe">
                [원데이] 한강에서 제트스키 체험하기 (feat. 사진촬영)
              </span>
            </div>
            <div className="listrow3" style={{ marginTop: '3px' }}>
              <span>홍대한 튜터</span>
            </div>
            <div className="listrow4" style={{ marginTop: '0px' }}>
              <span className="qweqwe">88000원 </span>
              <span>(총 8시간)</span>
            </div>
            <div className="listrow5">
              <span>
                <FavoriteBorderIcon
                  style={{ fontSize: '20px', color: 'red', height: '20px' }}
                />
              </span>
              <span className="qweqwe">162</span>
            </div>
          </div>
          <div className="classlist">
            <img alt="" src={img1} className="listimg" />

            <div className="listrow2">
              <span className="qweqwe">
                [원데이] 한강에서 제트스키 체험하기 (feat. 사진촬영)
              </span>
            </div>
            <div className="listrow3" style={{ marginTop: '3px' }}>
              <span>홍대한 튜터</span>
            </div>
            <div className="listrow4" style={{ marginTop: '0px' }}>
              <span className="qweqwe">88000원 </span>
              <span>(총 8시간)</span>
            </div>
            <div className="listrow5">
              <span>
                <FavoriteBorderIcon
                  style={{ fontSize: '20px', color: 'red', height: '20px' }}
                />
              </span>
              <span className="qweqwe">162</span>
            </div>
          </div>
          <div className="classlist">
            <img alt="" src={img1} className="listimg" />

            <div className="listrow2">
              <span className="qweqwe" style={{ width: '270px' }}>
                [원데이] 한강에서 제트스키 체험하기 (feat. 사진촬영)
              </span>
            </div>
            <div className="listrow3" style={{ marginTop: '7px' }}>
              <span>홍대한 튜터</span>
            </div>
            <div className="listrow4" style={{ marginTop: '0px' }}>
              <span className="qweqwe">88000원 </span>
              <span>(총 8시간)</span>
            </div>
            <div className="listrow5">
              <span>
                <FavoriteBorderIcon
                  style={{ fontSize: '20px', color: 'red', height: '20px' }}
                />
              </span>
              <span className="qweqwe">162</span>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
    </div>
  );
};

export default ClassList;
