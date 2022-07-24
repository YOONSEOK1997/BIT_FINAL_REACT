import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import axios from 'axios';

const MypagePayment = () => {
  const pay_user_id = localStorage.username;
  let listurl =
    process.env.REACT_APP_SPRING_URL + 'pay/detail?pay_user_id=' + pay_user_id;

  const [data, setData] = useState([]);

  const list = () => {
    axios.get(listurl).then(res => {
      console.log(res.data);
      setData(res.data);
      console.log(data);
    });
  };

  useEffect(() => {
    list();
    console.log(data);
  }, []);

  return (
    <Wrapper>
      <div className="mypage_header"></div>
      <Sidebar />
      <MypageContent>
        <Title>결제 내역</Title>
        <Ment>
          결제내역 관련 문의사항은 <b style={{ color: '#03d85e' }}>오늘,한강</b>
          팀에 문의 부탁드립니다😉🗯️
        </Ment>
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

        {data &&
          data.map((row, idx) => (
            <OneReceipt>
              {/* OneRecipt : 하나의 결제내역 */}
              <PayStatus>
                <PaidYes>결제완료</PaidYes>
                <PaidDate>
                  {row.pay_classoption_day} | 주문번호 : {row.pay_order_num}{' '}
                </PaidDate>
              </PayStatus>
              <ClassTitle>
                <div style={{ display: 'inline-block', marginLeft: '18px' }}>
                  {row.pay_class_name}
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
                    {row.pay_price / row.pay_classoption_percnt} 원
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
                    {row.pay_price}원
                  </div>
                </TotPrice>
              </ClassInfo>
            </OneReceipt>
          ))}
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
  margin-top: -230px;
  margin-left: 30px;
  width: 800px;
  height: 1500px;
  float: right;
  display: inline-block;
  background-color: #f3f3f3;
`;

const OneReceipt = styled.div`
  width: 750px;
  height: 230px;
  border: 1px #dbdbdb solid;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: white;
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
  box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
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
  box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
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
  box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
`;

const HowMuch = styled.div`
  margin-bottom: 8px;
`;

const PayWith = styled.div``;

const TotPrice = styled.div`
  float: right;
  margin-right: 18px;
`;

const Title = styled.div`
  font-size: 28px;
  width: 150px;
  height: 50px;
  margin-left: 40%;
  line-height: 50px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Ment = styled.div`
  font-size: 18px;
  width: 500px;
  margin-left: 150px;
  color: #999999;
  font-family: Noto Sans KR;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 35px;
  font-weight: 500;
  border-bottom: 0.5px solid #999999;
  padding-bottom: 20px;
`;
