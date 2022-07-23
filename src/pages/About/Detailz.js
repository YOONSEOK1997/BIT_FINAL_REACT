import React from 'react';
import './Detailz.css';

import styled from 'styled-components';
import { theme } from '../../styles/theme';

import d6 from './images/d6.jpg';
import { positions } from '@mui/system';

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
`;

const Detailz = () => {
  return (
    <Wrapper>
      <div>
        <br />
        <br />
        <div>오늘, 한강을 만들어 가는 사람은 누구인가요?</div>
        <div className="woori">
          <img
            className="woori_photo"
            src={d6}
            alt=""
            style={{
              width: '800px',
              height: '350px',
              marginTop: '100px',
              position: 'relative',
              left: '150px',
              marginBottom: '100px',
            }}
          />
        </div>
        <h1 style={{ position: 'relative', left: '330px', fontSize: 'medium' }}>
          김준영 이경주 홍대한 한별 김정하 최윤석
        </h1>
        <br />
        <br />
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Detailz;
