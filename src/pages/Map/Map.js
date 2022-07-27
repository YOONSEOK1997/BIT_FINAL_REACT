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
import h2 from './imagesi/h2.jpg';
import k1 from './imagesi/k1.jpg';
import k1_1 from './imagesi/k1_1.jpg';
import k2 from './imagesi/k2.jpg';
import k2_2 from './imagesi/k2_2.jpg';
import k3 from './imagesi/k3.jpg';
import k4 from './imagesi/k4.jpg';
import k5 from './imagesi/k5.jpg';
import k6 from './imagesi/k6.jpg';

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
          <Accordion.Header>여의도 MAP #1</Accordion.Header>
          <Accordion.Body>
            <img
              src={k1}
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
            <br />
            지하철, 버스 등 대중교통으로 접근성이 좋아 직장인과 일반시민들이
            <br />
            <br />
            즐겨찾는 명소이자 봄꽃축제, 세계불꽃축제, 각종 공연 및 마라톤행사 등
            <br />
            <br />
            다양한 행사가 이어져 볼거리와 즐길거리가 풍부한 휴식공간입니다. 또한
            <br />
            <br />
            밤섬, 여의도 샛강 등이 비교적 자연그대로 보존되어 있어 생태학습장 및
            <br />
            <br />
            자연친화형 공원으로 조성되어 있습니다.
            <br />
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>반포 MAP #1</Accordion.Header>
          <Accordion.Body>
            <img
              src={k2}
              alt=""
              style={{
                width: '1015px',
                height: '450px',
                marginTop: '100px',
                display: 'inline-block',
              }}
            />
            반포대교(잠수교)를 중심으로 상류는 한남대교, 하류는 동작대교 사이
            <br />
            <br />
            강변 남단에 위치해 있고, 길이는 7.2㎞로 서초구 반포동, 동작구
            <br />
            <br />
            흑석동에 인접해 있습니다. 한강르네상스 사업으로 조성된
            <br />
            <br />
            반포한강공원에서 반포대교 교량 양쪽에 설치된 달빛무지개분수는
            <br />
            <br />
            총길이1,140m(상·하류 570m)이고 2008년도에 세계에서 가장 긴
            <br />
            <br />
            교량분수로 세계기네스협회에 등재되어 있으며, 물을 뿜을 때마다
            <br />
            <br />
            아름다운 풍경을 연출하여 일곱빛깔 무지개처럼 다양한 볼거리와
            <br />
            <br />
            즐길거리를 제공합니다. 또한 물방울놀이터, 인라인허브, 축구장, 농구장
            <br />
            <br />
            등 체육시설이 있습니다. 동작대교 남단에는 전망대가 설치되어 탁 트인
            <br />
            <br />
            한강수면 위로 펼쳐진 넓은 하늘과 강변 빌딩숲을 감상할 수 있습니다.
            <br />
            <br />
            서래섬은 계절에 따라 유채, 메밀 등의 작물을 식재하여 꽃이 피는
            <br />
            <br />
            시기에는 서래섬을 일주하는 산책코스로 인기가 높습니다. 여의도와
            <br />
            <br />
            잠원한강공원으로 연결되는 7.2㎞의 자전거도로, 산책로가 분리되어
            <br />
            <br />
            시원한 강바람을 맞으며 자전거타기, 조깅, 산책을 즐기면서
            <br />
            <br />
            반포한강공원에서 오감만족 시간을 누려보세요.
            <br />
            <br />
            <img
              src={k2_2}
              alt=""
              style={{
                width: '800px',
                height: '450px',
                marginTop: '100px',
                display: 'inline-block',
              }}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>이촌 MAP #1</Accordion.Header>
          <Accordion.Body>
            <img
              src={k3}
              alt=""
              style={{
                width: '800px',
                height: '450px',
                marginTop: '100px',
                display: 'inline-block',
              }}
            />
            <br />
            <br />
            이촌한강공원은 금호동의 중랑천교와 이촌동의 원효대교 사이 강변
            <br />
            <br />
            북단에 위치해 있습니다. 인접한 자치구로는 성동구 금호동 4가부터
            <br />
            <br />
            옥수동을 포함하여 용산구 보광동, 서빙고동, 이촌 1, 2동이 있습니다.
            <br />
            <br />
            호안가 주변을 따라 갈대, 억새, 코스모스가 철따라 피어나서 시민들의
            <br />
            <br />
            산책과 조깅코스로 자주 이용됩니다. 청소년을 위한 청소년광장과
            <br />
            <br />
            X-게임장, 국제규모의 인라인스케이트장, 농구장, 테니스장, 게이트볼장
            <br />
            <br />
            등의 운동경기장 등이 여가 및 레포츠 공간으로 유용하게 활용되고
            <br />
            <br />
            있습니다. 또한 한강도하체험장이 생겨 개인, 직장, 학교 등 단체생활의
            <br />
            <br />
            팀웍훈련장으로 이용되고 있습니다.
            <br />
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>난지 MAP #1 </Accordion.Header>
          <Accordion.Body>
            <img
              src={k4}
              alt=""
              style={{
                width: '1015px',
                height: '450px',
                marginTop: '100px',
                display: 'inline-block',
              }}
            />
            홍제천교에서 난지천교 사이에 위치해 있고, 길이는 3.1㎞
            <br />
            <br />
            (약770,000㎡)로 마포구 상암동에 위치하고 있습니다. 한강르네상스
            <br />
            <br />
            사업으로 새롭게 조성된 난지한강공원은 노을공원, 하늘공원과 연결되는
            <br />
            <br />
            중앙연결브릿지, 평화의 공원 연결브릿지, 복합연결통로가 완공되어 공원
            <br />
            <br />
            이용시민들의 접근성을 개선시켰습니다. 평화의 공원 연결브릿지 앞에
            <br />
            <br />
            설치된 거울분수는 난지한강공원의 랜드마크 요소로 물을 뿜을 때마다
            <br />
            <br />
            아름다운 풍경을 연출하여 일곱빛깔 무지개처럼 다양한 볼거리와
            <br />
            <br />
            즐길거리를 제공합니다. 여름철 이용할수 있는 강변물놀이장은 과거
            <br />
            <br />
            강변에서 물놀이하던 추억을 되살리고자 최대수심 80㎝의 물놀이장공간을
            <br />
            <br />
            조성하여 어린아이를 동반하여 가족과 즐길수 있는 시설이
            <br />
            <br />
            설치되어있습니다. 또한 생태습지원에 보행연결브릿지가 설치되어
            <br />
            <br />
            자연상태의 초지 및 식물군락 등 수변에 서식하는 동물을 관찰할수
            <br />
            <br />
            있습니다. 주변엔 난지캠핑장이 조성되어 있어 바베큐를 즐기며 야영을
            <br />
            <br />
            할수 있는 공간이 있어 시민들에게 인기가 높습니다. 난지공원에
            <br />
            <br />
            조성되어 있는 자전거도로는 동쪽으로는 뚝섬공원, 서쪽으로는 고양시
            <br />
            <br />
            행주대교 남단, 노을공원 하늘공원과 연결되어 맑은 자연의 향취를
            <br />
            <br />
            만끽할수 있는 난지한강공원에서 마음껏 즐겨보세요.
            <br />
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>뚞섬 MAP #1 </Accordion.Header>
          <Accordion.Body>
            <img
              src={k5}
              alt=""
              style={{
                width: '1015px',
                height: '450px',
                marginTop: '100px',
                display: 'inline-block',
              }}
            />
            <br />
            <br />
            한강공원이 조성되기 이전부터 강변유원지로 유명했던 곳입니다.
            <br />
            <br />
            수상에서는 시원한 바람을 맞으며 낭만과 젊음을 만끽할 수 있는 윈드
            <br />
            <br />
            서핑, 수상스키, 모터보트 등 수상스포츠가 활발하게 이루어지고
            <br />
            <br />
            있습니다.
            <br />
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>잠실 MAP #1 </Accordion.Header>
          <Accordion.Body>
            <img
              src={k6}
              alt=""
              style={{
                width: '1015px',
                height: '450px',
                marginTop: '100px',
                display: 'inline-block',
              }}
            />
            <br />
            <br />
            잠실철교에서 영동대교 사이 강변 남단에 위치해 있으며,
            <br />
            <br />
            잠실종합운동장, 롯데월드, 올림픽공원이 인접해 있어 어느 지역보다
            <br />
            <br />
            생활체육시설 및 문화시설을 함께 이용하기 편리합니다. 자연학습장은
            <br />
            <br />
            각종 꽃,야생화,농작물 등이 잘 조성되어 어린이들의 자연학습과
            <br />
            <br />
            가족단위의 소풍장소로 인기가 높습니다. 또한 잠실 수중보의
            <br />
            <br />
            물고기길(어도)은 남녀노소 할 것 없이 살아있는 한강을 직접 느낄수
            <br />
            <br />
            있고, 생태프로그램도 운영되고 있는 또 하나의 자랑거리입니다.
            <br />
            <br />
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
