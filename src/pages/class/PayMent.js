import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = (effect, deps, props) => {
  const navi = useNavigate();
  const { state } = useLocation();
  console.log(state.data);

  const payinfo = e => {
    navi('/class/payment/after', {
      state2: {
        data2: {
          user_id: 'anyang',
          classnum: `${props.data.class_num}`,
          classname: `${props.data.class_name}`,
          classoption_num: `${props.changeoptions.classoption_num}`,
          classoption_day: `${props.changeoptions.classoption_day}`,
          classoption_starttime: `${props.changeoptions.classoption_starttime}`,
          classoption_endtime: `${props.changeoptions.classoption_endtime}`,
          percnt: `${props.percnt}`,
          totpay: `${props.totpay}`,
        },
      },
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
      merchant_uid: `hdh_${new Date().getTime()}`, //주문번호보내줘야해~~~
      name: '오늘,한강',
      amount: `${state.data.totpay}`, //결제금액
      custom_data: {
        name: '부가정보',
        desc: '세부 부가정보',
      },
      //주문자정보
      buyer_name: '홍대한', //바꿔야해 USER_NAME
      buyer_tel: '01012345678',
      buyer_email: 'gksquf5012@gmail.com',
      buyer_addr: '강남구 역삼동 178-8',
      buyer_postalcode: '01234', //우편
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
      payinfo();
      navi('/class/payment/after');
    } else {
      alert(`결제 실패: ${error_msg}`);
      navi(-1);
    }
  };

  return <>{onClickPayment()};</>;
};
export default Payment;
