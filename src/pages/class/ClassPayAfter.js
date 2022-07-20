import React from 'react';
import {useNavigate,useParams,useLocation} from "react-router-dom";
import img1 from './classImage/pay.png';

const ClassPayAfter = () => {
    const navi = useNavigate();
    const { state } = useLocation();
    console.log(state.data);
    return (
        <div>
            <div className="content_container" style={{marginLeft:'310px', borderColor:'white'}}>
                <img alt='' src={img1} style={{width:'300px',height:'300px', 
                borderRadius:'10px', marginBottom:'10px',
                marginRight:'25px',marginLeft:'500px'}} />
                <div style={{marginLeft:'450px',fontSize:'40px',fontWeight:'600'}}>
                    결제가 완료되었습니다!
                </div>
                <div style={{width:'500px',borderColor:'gray', float:'center',marginLeft:'400px',marginTop:'70px'
                ,fontSize:'23px'}}>
                    <div style={{marginTop:'13px'}}>주문번호 : hdh_202207190001</div>
                    <div style={{marginTop:'15px'}}>주문자명 : 한별</div>
                    <div style={{marginTop:'15px'}}>클래스명 : [원데이] 한강에서 제트스키 체험하기</div>
                    <div style={{marginTop:'15px'}}>신청일정 : 2022-10-17</div>
                    <div style={{marginTop:'15px'}}>신청인원 : 3명</div>
                    <div style={{marginTop:'15px'}}>결제금액 : 87000원</div>

                    
                
                </div>
                <br/><br/>
                <button className='btn1'style={{width:'150px',height:'50px',marginLeft:'560px'}}
                onClick={()=>{
                    navi("/")
                }} > &lt; 메인으로</button>
            </div>
        </div>
    );
};

export default ClassPayAfter;