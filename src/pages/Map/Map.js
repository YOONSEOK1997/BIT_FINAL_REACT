import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import mm1 from './imagesi/mm1.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Map.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

import h1 from './imagesi/h1.jpg';
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">반포 클래스</Popover.Header>
    <br />
    <Popover.Body>
      수영: 10명 <br />
      멘탈힐링: 5명 <br />
      스노우쿨링: 10명
    </Popover.Body>
  </Popover>
);
const popover1 = (
  <Popover id="popover-basic1">
    <Popover.Header as="h3">여의도 클래스</Popover.Header>
    <Popover.Body>
      테니스: 10명 <br />
      수영: 5명 <br />
      댄스: 7명
    </Popover.Body>
  </Popover>
);
const popover2 = (
  <Popover id="popover-basic2">
    <Popover.Header as="h3">이촌 클래스</Popover.Header>
    <br />
    <Popover.Body>
      복싱: 10명 <br />
      멘탈힐링: 5명 <br />
      스노우쿨링: 10명
    </Popover.Body>
  </Popover>
);
const popover3 = (
  <Popover id="popover-basic3">
    <Popover.Header as="h3">난지 클래스</Popover.Header>
    <br />
    <Popover.Body>
      수영: 10명 <br />
      멘탈힐링: 5명 <br />
      스노우쿨링: 10명
    </Popover.Body>
  </Popover>
);
const popover4 = (
  <Popover id="popover-basic4">
    <Popover.Header as="h3">뚝섬 클래스</Popover.Header>
    <br />
    <Popover.Body>
      수영: 10명 <br />
      멘탈힐링: 5명 <br />
      스노우쿨링: 10명
    </Popover.Body>
  </Popover>
);
const popover5 = (
  <Popover id="popover-basic5">
    <Popover.Header as="h3">잠실 클래스</Popover.Header>
    <br />
    <Popover.Body>
      수영: 10명 <br />
      테니스: 5명 <br />
      런닝: 10명
    </Popover.Body>
  </Popover>
);
const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me</Button>
  </OverlayTrigger>
);
function Map() {
  return (
    <Wrapper>
      {/* 이미지 */}
      <img
        src={mm1}
        alt=""
        style={{
          width: '1035px',
          height: '450px',
          marginTop: '100px',
          display: 'inline-block',
        }}
      />
      {/* 아이콘+지역명 */}
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <div className="banpo">
          <LocationOnIcon
            style={{
              fontSize: '60px',
              color: 'red',
              display: 'inline-block',
            }}
          />
          <h2>반포</h2>
        </div>
      </OverlayTrigger>
      {/* 닫힘 */}
      <OverlayTrigger trigger="click" placement="left" overlay={popover1}>
        <div className="yeouido">
          <LocationOnIcon
            style={{
              fontSize: '60px',
              color: 'orange',
            }}
          />
          <h2>여의도</h2>
        </div>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
        <div className="echon">
          <LocationOnIcon
            style={{
              fontSize: '60px',
              color: 'green',
            }}
          />
          <h2>이촌</h2>
        </div>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
        <div className="nanji">
          <LocationOnIcon
            style={{
              fontSize: '60px',
              color: 'green',
            }}
          />
          <h2>난지</h2>
        </div>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="left" overlay={popover4}>
        <div className="ddukseom">
          <LocationOnIcon
            style={{
              fontSize: '60px',
              color: 'green',
            }}
          />
          <h2>뚝섬</h2>
        </div>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="right" overlay={popover5}>
        <div className="jamsil">
          <LocationOnIcon
            style={{
              fontSize: '60px',
              color: 'blue',
            }}
          />
          <h2>잠실</h2>
        </div>
      </OverlayTrigger>
      <br />
      <br />
      <br />
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>여의도 #1</Accordion.Header>
          <Accordion.Body>
            <img
              src={h1}
              alt=""
              style={{
                width: '1015px',
                height: '450px',
                marginTop: '100px',
                display: 'inline-block',
              }}
            />
            여의도한강공원은 정치, 금융, 언론의 중심지인 여의도에 자리하고
            <br />
            지하철, 버스 등 대중교통으로 접근성이 좋아 직장인과 일반시민들이
            <br />
            즐겨찾는 명소이자 봄꽃축제, 세계불꽃축제, 각종 공연 및 마라톤행사 등
            <br />
            다양한 행사가 이어져 볼거리와 즐길거리가 풍부한 휴식공간입니다. 또한
            <br />
            밤섬, 여의도 샛강 등이 비교적 자연그대로 보존되어 있어 생태학습장 및
            <br />
            자연친화형 공원으로 조성되어 있습니다. 면 적 : 1,487,374㎡ 길 이 :
            <br />
            8.4km(최하류쪽 한강철교중앙~ 국회뒤 샛강 사면지) 주 소 : 서울시
            <br />
            영등포구 여의동로 330 (여의도동 8) 여의도안내센터 : ☎ 02)3780-0561~5
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>반포</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>이촌 #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>난지 #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>뚝섬 #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>잠실 #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Wrapper>
  );
}
export default Map;
const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
  margin-top: 40px;
  position: relative;
  padding-bottom: 20px;
  height: 1000px;
  border: 1px solid gray;
`;
