import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import img1 from './classImage/pay.png';

const ClassPayAfter = () => {
  const navi = useNavigate();
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <div
        className="content_container"
        style={{ marginLeft: '310px', borderColor: 'black', width: '1000px' }}
      >
        <img
          alt=""
          src={img1}
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '10px',
            marginBottom: '10px',
            marginRight: '25px',
            marginLeft: '500px',
          }}
        />
        <div
          style={{ marginLeft: '450px', fontSize: '40px', fontWeight: '600' }}
        >
          결제가 완료되었습니다!
        </div>
        <div
          style={{
            width: '500px',
            borderColor: 'gray',
            float: 'center',
            marginLeft: '400px',
            marginTop: '70px',
            fontSize: '23px',
          }}
        >
          <div style={{ marginTop: '13px' }}>
            주문번호 : {state.merchant_uid}
          </div>
          <div style={{ marginTop: '15px' }}>주문자명 : {state.buyer_name}</div>
          <div style={{ marginTop: '15px' }}>
            클래스명 : {state.custom_data.classname}
          </div>
          <div style={{ marginTop: '15px' }}>
            신청일정 : {state.custom_data.classoption_day}
            &nbsp;&nbsp;&nbsp;
            {state.custom_data.classoption_starttime}시 ~{' '}
            {state.custom_data.classoption_endtime}시
          </div>
          <div style={{ marginTop: '15px' }}>
            신청인원 : {state.custom_data.percnt}명
          </div>
          <div style={{ marginTop: '15px' }}>
            결제금액 : {state.custom_data.amount}원
          </div>
        </div>
        <br />
        <div>튜터 메시지를 확인하세요!</div>
        <div>{state.custom_data.classconfirm}</div>
        <br />
        <button
          className="btn1"
          style={{ width: '150px', height: '50px', marginLeft: '560px' }}
          onClick={() => {
            navi('/');
          }}
        >
          {' '}
          &lt; 메인으로
        </button>
      </div>
    </div>
  );
};

export default ClassPayAfter;
