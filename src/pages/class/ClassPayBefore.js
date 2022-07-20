
import {useNavigate,useParams} from "react-router-dom";
import React,{useState,useEffect} from 'react';

import img1 from './classImage/8.jpg';
import img2 from './classImage/rkfk1.JPG';
//import { useHistory } from 'react-router-dom';
const ClassPaybefore = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
    const navi = useNavigate();
    //const history = useHistory();
    const [data,setData]=useState('');
    const handleClick = (e) => {
        
        navi('/class/payment/after', { state: { 
            data : {
                pay_price:'한',
                user_id:'anyang'
            }
            } });
    }
    return (
        <div className={open ? 'openModal modal' : 'modal'}>

        {open ? (
            <section style={{width:'520px', fontSize:'20px'}}>
            <header style={{fontSize:'25px'}}>
                {header}
                <button className="close" onClick={close}>
                &times;
                </button>
            </header>
            <main>{props.children}
            <div style={{marginTop:'20px',marginLeft:'70px'}}>
                
                <div style={{fontWeight:'600',fontSize:'23px'}}>캐포머와 리포머를 활용한 필라테스</div>
                
                <div style={{float:'left',marginTop:'25px',marginLeft:'15px'}}>수업료</div>
                <div style={{textAlign:'right', marginRight:'100px', marginTop:'25px'}}>25,000원</div>
                <div style={{float:'left',marginTop:'15px',marginLeft:'15px'}}>신청일정</div>
                <div style={{textAlign:'right', marginRight:'100px', marginTop:'15px'}}>2022-10-17</div>
                <div style={{float:'left',marginTop:'15px',marginLeft:'15px'}}>신청인원</div>
                <div style={{textAlign:'right', marginRight:'100px', marginTop:'15px'}}>3명</div>
                <div style={{float:'left',marginTop:'15px',marginLeft:'15px'}}>총 결제금액</div>
                <div style={{textAlign:'right', marginRight:'100px', marginTop:'13px',marginBottom:'20px'}}>75,000원</div>
                

                
                <button onClick={handleClick}>
                전송
                </button>
                {/* <button onClick={() => 
                    navi({
                        pathname : "/class/payment/after", 
                        state : { 
                        data : 'This is data'
                        },
                    })
                }>
                전송
                </button> */}

                <br/>
                <img alt='' src={img2} style={{width:'320px',height:'65px', float:'right', marginRight:'80px'}} />
                <br/><br/><br/>

            </div>
            </main>
            <footer>
                <button onClick={close}>취소</button>
                <button onClick={()=>{
                    navi("/test2/payment")
                }} style={{marginLeft:'10px'}}>결제</button>
            </footer>
            </section>
        ) : null}
        </div>
    );
};

export default ClassPaybefore;

