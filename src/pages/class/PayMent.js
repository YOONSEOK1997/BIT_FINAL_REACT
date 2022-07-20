import React, { useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Payment = (effect, deps) => {
	const navi = useNavigate();

	useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
        document.head.removeChild(jquery);
        document.head.removeChild(iamport);
    }
}, []);

const onClickPayment = () => {
    const { IMP } = window;
    IMP.init('imp02710015');

    const data = {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: `hdh_${new Date().getTime()}`, //주문번호
        name: '오늘,한강',
        amount: '110',//결제금액
        custom_data: {
            name: '부가정보',
            desc: '세부 부가정보'
        },
        //주문자정보
        buyer_name: '홍대한',
        buyer_tel: '01012345678',
        buyer_email: '14279625@gmail.com',
        buyer_addr: '구천면로 000-00',
        buyer_postalcode: '01234'//우편
    };

    IMP.request_pay(data, callback);
}

const callback = (response) => {
    const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} =response;

    if (success){
        alert('결제 성공');
        navi("/class/payment/after")
    } else {
        alert(`결제 실패: ${error_msg}`);
        navi(-1);
    }   
    }

    return (
        <>
		{onClickPayment()};
        
        </>
    );
}
export default Payment;