import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const MypagePayment = () => {
  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <MypageContent>
        <OneReceipt>
          {/* OneRecipt : 하나의 결제내역 */}
          <PayStatus>
            <PaidYes>결제완료</PaidYes>
            <PaidDate>2022.07.25 | 08:17 </PaidDate>
          </PayStatus>
          <ClassTitle>
            <div style={{ display: 'inline-block', marginLeft: '18px' }}>
              [원데이]한강에서 수건돌리기하기
            </div>
            <div
              style={{
                display: 'inline-block',
                fontSize: '16px',
                float: 'right',
                marginRight: '18px',
              }}
            >
              이지호 튜터
            </div>
          </ClassTitle>
          <ClassInfo>
            <HowMuch>
              <HMBtn>가격</HMBtn>
              <div style={{ display: 'inline-block', marginLeft: '16px' }}>
                150,000 원
              </div>
            </HowMuch>
            <PayWith>
              <PWBtn>결제 수단</PWBtn>
              <div style={{ display: 'inline-block', marginLeft: '16px' }}>
                네이버페이
              </div>
            </PayWith>
            <TotPrice>
              <TPBtn>총 금액</TPBtn>
              <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                150,000원
              </div>
            </TotPrice>
          </ClassInfo>
        </OneReceipt>
      </MypageContent>
    </Wrapper>
  );
};

export default MypagePayment;

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
  margin-top: 40px;
  position: relative;
  padding-bottom: 20px;
  height: 2000px;
  border: 1px solid gray;
`;

const MypageContent = styled.div`
  border: 1px solid gray;
  margin-top: -200px;
  margin-left: 30px;
  width: 800px;
  height: 1000px;
  float: right;
  display: inline-block;
`;

const OneReceipt = styled.div`
  width: 750px;
  height: 230px;
  border: 1px #dbdbdb solid;
  border-radius: 3px;
  margin-left: 20px;
`;

const PaidYes = styled.div`
  display: inline-block;
  color: #f20e42;
  border: 1px solid #f20e42;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
`;

const PaidDate = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  margin-left: 8px;
`;

const PayStatus = styled.div`
  height: 50px;
  line-height: 50px;
  margin-left: 5px;
`;

const ClassTitle = styled.div`
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  line-height: 50px;
`;

const ClassInfo = styled.div`
  margin-top: 20px;
  margin-left: 30px;
`;

const HMBtn = styled.div`
  display: inline-block;
  background-color: #03d85e;
  border: 1px solid #03d85e;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
`;

const PWBtn = styled.div`
  display: inline-block;
  background-color: #03d85e;
  border: 1px solid #03d85e;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
`;

const TPBtn = styled.div`
  display: inline-block;
  background-color: #03d85e;
  border: 1px solid #03d85e;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
`;

const HowMuch = styled.div`
  margin-bottom: 8px;
`;

const PayWith = styled.div``;

const TotPrice = styled.div`
  float: right;
  margin-right: 18px;
`;
