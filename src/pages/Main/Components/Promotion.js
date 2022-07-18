import React from 'react';
import styled from 'styled-components';

const Promotion = ({ id }) => {
  return (
    <Wrapper>
      <img alt="promotion" src={PROMOTIONS[id]} />
    </Wrapper>
  );
};

export default Promotion;

const Wrapper = styled.div`
  width: 890px;
  img {
    height: 370px;
    width: 890px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const PROMOTIONS = [
  '/images/promotion/promotion1.png',
  '/images/promotion/promotion2.png',
  '/images/promotion/promotion3.png',
];
