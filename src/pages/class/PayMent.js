import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'; //백엔드와 통신

const Payment = (effect, deps, props) => {
  const navi = useNavigate();
  const { state } = useLocation();
  //console.log(state.data);

  //url 등록
  let insertUrl = process.env.REACT_APP_SPRING_URL + 'class/insert';
  const onInsert = () => {
    // key(dto):value 같다면 key만 가능
    axios
      .post(insertUrl, {}) //photo는 backend에서
      .then(res => {
        alert('insert 성공@');
      });
  };

  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init('imp02710015');

    const data = {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: `hdh_${new Date().getTime()}`, //주문번호
      name: '오늘,한강',
      amount: `${state.data.totpay}`, //결제금액
      custom_data: {
        classnum: `${state.data.classnum}`,
        classname: `${state.data.classname}`, //클래스명
        classoption_num: `${state.data.classoption_num}`,
        classoption_day: `${state.data.classoption_day}`, //클래스일정1
        classoption_starttime: `${state.data.classoption_starttime}`, //클래스일정2
        classoption_endtime: `${state.data.classoption_endtime}`, //클래스일정3
        percnt: `${state.data.percnt}`, //신청인원
        amount: `${state.data.totpay}`, //결제금액
        classconfirm: `${state.data.classconfirm}`, //컨펌 메세지
      },
      //주문자정보
      buyer_name: '홍대한', //바꿔야해 USER_NAME
      buyer_tel: '01012345678',
      buyer_email: 'gksquf5012@gmail.com',
      buyer_addr: '강남구 역삼동 178-8',
      buyer_postalcode: '01234',
    };

    IMP.request_pay(data, callback);

    navi('/class/payment/after', {
      state2: {
        id: {
          merchant_uid: data.merchant_uid,
        },
      },
    });
  };

  const callback = response => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;

    if (success) {
      alert('결제 성공');
      navi('/class/payment/after', { state: response });
    } else {
      alert(`결제 실패: ${error_msg}`);
      navi(-1);
    }
  };

  return <>{onClickPayment()};</>;
};
export default Payment;
