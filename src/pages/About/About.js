import React, { Component } from 'react';
import Myslide from './Myslide';
import './About.css';
import { Divider } from '@mui/material';

import m10 from './images/m10.jpg';
// import m11 from './images/m11.jpg';

export default class about extends Component {
  render() {
    return (
      <div>
        <h1>Swiper Js</h1>
        <br></br>
        <br></br>
        <br></br>
        <Myslide></Myslide>
        <br></br>
        <br></br>
        <div>
          <h1>오늘 한강</h1>
          <div className="text1">
            "오늘 한강은" 같은 관심사를 가진 사람들과 클래스로 만나는 클래스
            서비스 입니다.
            <br />
            클래스를 통해 오프라인 정모로 만나 함께 취미 활동을 즐길 수
            있습니다.
            <br />또 개인이 원하는 취미모임을 찾아 가입할 수 있고 또 클래스
            챌린지 모임을 개설할 수도 있습니다.
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="about_main">
          <img src={m10} alt="" style={{ width: '1000px', height: '450px' }} />
          {/* <img src={m11} alt="" style={{ width: '1000px', height: '450px' }} /> */}
        </div>
      </div>
    );
  }
}
