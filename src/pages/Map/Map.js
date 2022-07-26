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
    <br />
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
