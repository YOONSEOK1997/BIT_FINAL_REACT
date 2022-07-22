import React from 'react';
import d1 from './images/d1.jpg';

import './Detailp.css';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
`;

const Detailp = () => {
  return (
    <Wrapper>
      <br />
      <br />
      <br />
      <div>
        <div className="detail_first">
          오늘, 한강이 가장 중요하게 생각하는 가치는 무엇인가요?
        </div>

        <div className="detail_photo">
          <img
            src={d1}
            alt=""
            style={{ width: '1035px', height: '450px', marginTop: '100px' }}
          />
        </div>
        <br />
        <br />
        <div className="detail_private">개인의 성장</div>
        <br />
        <br />
        <br />
        <div className="detail_privatename">
          오늘, 한강은 무엇보다 '개인의 성장'에 초점이 맞춰져있는 것 같아요!
          <br />
          수업을 진행하는 '튜더'에게도, 수강하는 '수강생'에게도 성장의 가치를
          <br />
          주고 있습니다. '튜더'는 오늘, 한강을 통해 자신의 재능과 노하우를
          <br />
          사회적인 공식에서 벗어나 수강생에게 공급해 부가가치를 창출할 수 있어요
          <br />
        </div>
        <br />
        <br />
        <br />
        <div className="detail_energy">오늘, 한강 에너지</div>
        <br />
        <br />
        <div className="detail_energyname">
          오늘, 한강은 항상 시끌벅적해요. <br />
          아무래도 구성원 대부분이 20-30대 인것 <br />
          도 이유겠지만 다들 기본적으로 새로운 걸 직접 배우고 해보고 뽐내는 것에
          <br />
          관심이 많은 것 같아요! 실제로 오늘, 한강 팀원들이 튜더가 돼서 수업을{' '}
          <br />
          열기도 하고, 어느 날은 수강생으로 모여서 이것저것 배우러 다녀요 <br />
        </div>
        <br />
      </div>
    </Wrapper>
  );
};

export default Detailp;
