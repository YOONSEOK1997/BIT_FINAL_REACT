import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Myslide2 from './Myslide2';
import './Detailz.css';

import d6 from './images/d6.jpg';
import d13 from './images/d13.jpg';
import Modalj from './Modalj';

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
`;

function Detailz() {
  const [modalOpen3, setModalOpen3] = useState(false);
  const openModal3 = () => {
    setModalOpen3(true);
  };
  const closeModal3 = () => {
    setModalOpen3(false);
  };

  return (
    <Wrapper>
      <br />
      <br />
      <div>
        <h2>오늘, 한강 을 만들어 가는 사람은 누구인가요?</h2>
        <img
          src={d6}
          alt=""
          style={{ width: '1035px', height: '550px', marginTop: '100px' }}
        />
        <br />
        <br />
        <div className="routine">
          일상에서는 쉽게 발견하지 못했을 각자의 재능을 발견해 다른 사람들과
          <br />
          나누는 곳. 그 과정에서 튜터와 수강생 모두가 함께 성장하는 곳. 저희가
          <br />
          생각하는 오늘, 한강 은 이런 곳이에요. 저 또한 한 명의 열렬한 유저로서
          이
          <br />
          경험이 얼마나 소중한지 알기에, 더욱 많은 분들이 재능 공유와 성장의
          <br />
          즐거움을 누리실 수 있도록 오늘, 한강을 가꾸어가는 일에 저희 재능을
          <br />
          활용하기로 결심했습니다.
        </div>
        <br />
        <div className="swiper-slide2">
          <Myslide2></Myslide2>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <React.Fragment>
            <button className="class_reviewbtn" onClick={openModal3}>
              모달창 입장
            </button>
            <Modalj open={modalOpen3} close={closeModal3} />
          </React.Fragment>{' '}
        </div>
      </div>
    </Wrapper>
  );
}

export default Detailz;
