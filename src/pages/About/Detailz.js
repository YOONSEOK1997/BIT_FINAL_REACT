import React from 'react';
import './Detailu.css';

import styled from 'styled-components';
import { theme } from '../../styles/theme';

import d6 from './images/d6.jpg';

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
        <img
          src={d6}
          alt=""
          style={{ width: '1035px', height: '450px', marginTop: '100px' }}
        />
      </div>
    </Wrapper>
  );
};

export default Detailz;
