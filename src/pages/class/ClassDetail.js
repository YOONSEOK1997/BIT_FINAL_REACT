import React, { useState, useEffect, useRef } from 'react';
import './ClassDetail.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// alert MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClassReview from './ClassReview';
import ReviewModal from './ReviewModal';
import ClassPaybefore from './ClassPayBefore';
import ChatRoom from '../chatting/ChatRoom';
//iconimg
import target from './classImage/target2.jpg';
import like from './classImage/like.JPG';
import cnt from './classImage/cnt.JPG';
import location from './classImage/location.JPG';
import time from './classImage/money.JPG';

import banner from './classImage/배너.png';

const ClassDetail = () => {
  const { class_num } = useParams();
  const [data, setData] = useState('');
  const [options, setOptions] = useState([]);
  const percnt = useRef(1);
  const [class_price, setClass_price] = useState(0);
  const totpay = useRef(0);
  const navi = useNavigate();
  const [tab, setTab] = useState(1);

  // alert MUI (삭제 다이얼로그 코드 추가)
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [change, setChange] = useState(false);
  const changeoptions = useRef('');
  const [main, setMain] = useState(1);

  //전역변수등록
  const SPRING_URL = process.env.REACT_APP_SPRING_URL;

  //url등록
  let detailUrl = SPRING_URL + 'class/detail?class_num=' + class_num;
  let detailUrl2 = SPRING_URL + 'class/detailoption?class_num=' + class_num;
  let deletelUrl = SPRING_URL + 'class/delete?class_num=' + class_num;
  let photoUrl = process.env.REACT_APP_SPRING_URL + 'save/';

  //popup modal (ClassGuide, 클래스신청)
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    if (changeoptions.current == 0) {
      alert('일정을 선택해주세요옹~?');
    } else {
      setModalOpen(true);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [modalOpen2, setModalOpen2] = useState(false);
  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  const [modalOpen3, setModalOpen3] = useState(false);
  const openModal3 = () => {
    setModalOpen3(true);
  };
  const closeModal3 = () => {
    setModalOpen3(false);
  };

  //스프링으로부터 num에 해당하는 data받기
  const onDataReceive = () => {
    axios.get(detailUrl).then(res => {
      //res에 dto가 들어있음
      //console.log(res.data.sangpum); 상품명 출력 확인
      setData(res.data);
      setClass_price(res.data.class_price);
      console.log(res.data);
    });
  };

  const onOptionReceive = () => {
    axios.get(detailUrl2).then(option => {
      setOptions(option.data);
      console.log(option.data);
    });
  };

  //클래스 삭제시 호출 할 함수
  const onDelete = () => {
    axios.delete(deletelUrl).then(res => {
      //삭제 후 목록으로 이동
      navi('/class/list');
    });
    handleClose(); //다이얼로그 창 닫기
  };

  const handleChange = e => {
    changeoptions.current = options[e.target.value];
    console.log(changeoptions);
    setChange(true);
  };

  //찜
  const [like, setLike] = useState('🤍');
  const likeChange = e => {
    if (like === '🤍') {
      setLike('❤️');
    } else {
      setLike('🤍');
    }
  };

  //처음 랜더링시 위의 함수 호출
  useEffect(() => {
    onDataReceive();
    onOptionReceive();
  }, []);
  return (
    <div>
      <div className="content_container" style={{ marginLeft: '150px' }}>
        <div className="class_top">
          <div className="class_title_div">
            <div
              style={{
                fontSize: '20px',
                color: '#0000FF',
                fontWeight: 500,
                marginBottom: '5px',
              }}
            >
              오늘, 한강과 함께하는
            </div>
            <span className="class_title">{data.class_name}</span>
          </div>
          <div className="tutor_info">
            <div class="tutor_image" style={{ float: 'left' }}></div>
            <span className="tutor_name">{data.tutor_id} 튜터</span>
          </div>
          {/* 이거 map으로 돌릴 수 있을거같은데 일단 */}
          {main == 1 ? (
            <img src={photoUrl + data.class_photo1} className="class_image1" />
          ) : main == 2 ? (
            <img src={photoUrl + data.class_photo2} className="class_image1" />
          ) : main == 3 ? (
            <img src={photoUrl + data.class_photo3} className="class_image1" />
          ) : main == 4 ? (
            <img src={photoUrl + data.class_photo4} className="class_image1" />
          ) : (
            <img src={photoUrl + data.class_photo5} className="class_image1" />
          )}
          <div className="imagemap">
            <img
              className="class_image"
              src={photoUrl + data.class_photo1}
              onClick={() => {
                setMain(1);
              }}
            />
            <img
              className="class_image"
              src={photoUrl + data.class_photo2}
              onClick={() => {
                setMain(2);
              }}
            />
            <img
              className="class_image"
              src={photoUrl + data.class_photo3}
              onClick={() => {
                setMain(3);
              }}
            />

            <img
              className="class_image"
              src={photoUrl + data.class_photo4}
              onClick={() => {
                setMain(4);
              }}
            />
          </div>
          <div className="class_info" style={{ float: 'right' }}>
            <div className="class_plan" style={{ float: 'left' }}>
              <span class="class_plann">클래스 일정</span>
            </div>
            <select className="plan" onChange={handleChange}>
              <option selected disabled>
                일정을 선택해 주세요
              </option>

              {/* 정원 꾸와아아아아아악!!찰시? disabled */}
              {options.map((row, idx) => {
                if (
                  `${row.classoption_presentperson}` ===
                  `${row.classoption_totalperson}`
                ) {
                  return (
                    <option value={idx} disabled>
                      {row.classoption_day} &nbsp;{row.classoption_starttime}시
                      ~ {row.classoption_endtime}시 (정원 :{' '}
                      {row.classoption_presentperson}/
                      {row.classoption_totalperson}) (마감)
                    </option>
                  );
                } else {
                  return (
                    <option value={idx}>
                      {row.classoption_day} &nbsp;{row.classoption_starttime}시
                      ~ {row.classoption_endtime}시 (정원 :{' '}
                      {row.classoption_presentperson}/
                      {row.classoption_totalperson}){' '}
                    </option>
                  );
                }
              })}
            </select>

            {change === true ? (
              <div>
                <div className="class_plan_row">
                  <span className="selectplan">
                    {changeoptions.current.classoption_day}{' '}
                    {changeoptions.current.classoption_starttime}시 ~{' '}
                    {changeoptions.current.classoption_endtime}시
                  </span>
                  <br />
                  <div style={{ marginTop: '15px' }}>
                    <div className="perselect" style={{ marginTop: '5px' }}>
                      인원 선택
                    </div>
                    <input
                      placeholder="1"
                      defaultValue={percnt}
                      type="number"
                      className="percnt"
                      onChange={e => {
                        percnt.current = parseInt(e.target.value);

                        totpay.current = percnt.current * class_price;
                        console.log('금액' + class_price);
                        console.log('총인원' + percnt.current);
                        console.log('총금액' + totpay.current);
                      }}
                    ></input>
                  </div>
                </div>
                {/* class_plan_row */}
              </div>
            ) : (
              ''
            )}
            <div className="totcnt">
              <div className="money1">
                {data.class_price / data.class_hour}원 / 시간 (인당)
                <div className="money2">
                  {data.class_price}원 / 총 {data.class_hour}시간
                </div>
              </div>
            </div>

            <div className="classbtn">
              <React.Fragment>
                <button
                  onClick={openModal}
                  className="class_signbtn"
                  style={{ cursor: 'pointer' }}
                >
                  클래스 신청하기
                </button>
                {/* //header 부분에 텍스트를 입력한다. */}
                <ClassPaybefore
                  open={modalOpen}
                  close={closeModal}
                  header="결제 정보"
                  data={data}
                  options={options}
                  changeoptions={changeoptions.current}
                  totpay={totpay.current}
                  percnt={percnt.current}
                >
                  {/* // Modal.js <main> {props.children} </main>에 내용이 입력 */}
                </ClassPaybefore>
              </React.Fragment>
              <button
                className="class_likebtn"
                onClick={likeChange}
                style={{ cursor: 'pointer' }}
              >
                {like}
              </button>
              {/* 클릭시 <button className="class_likebtn">🤍</button> */}
            </div>
          </div>{' '}
          {/* info */} <br />
        </div>
        {/* top */}

        {/* <div className="class_summ">
          <div className="box">
            <div className="boxtext">{data.class_location}</div>
            <img
              alt=""
              src={location}
              style={{ width: '125px', marginLeft: '20px', marginTop: '5px' }}
            />
          </div>
          <div className="box">
            <div className="boxtext">{data.class_target}</div>
            <img
              alt=""
              src={target}
              style={{ width: '125px', marginLeft: '20px', marginTop: '5px' }}
            />
          </div>
          <div className="box">
            <div className="boxtext">198개</div>
            <img
              alt=""
              src={like}
              style={{ width: '125px', marginLeft: '20px', marginTop: '10px' }}
            />
          </div>
          <div className="box">
            <div className="boxtext" style={{ fontSize: '20px' }}>
              시간당
              <br />
              {data.class_price / data.class_hour}원
              <img
                alt=""
                src={time}
                style={{ width: '125px', marginLeft: '10px', marginTop: '5px' }}
              />
            </div>
          </div>
          <div className="box">
            <div className="boxtext">
              정원
              {options[0].classoption_totalperson} 명
            </div>
            <img
              alt=""
              src={cnt}
              style={{ width: '125px', marginLeft: '20px' }}
            />
          </div>
        </div> */}
        <br />
        <br />
        <br />

        <div
          className="class_tabsum"
          style={{ width: '1000px', marginTop: '200px' }}
        >
          <br />
          <br />

          <div
            className="class_tab"
            onClick={() => {
              setTab(1);
            }}
          >
            클래스 소개
          </div>
          <div
            className="class_tab"
            onClick={() => {
              setTab(2);
            }}
          >
            채팅방
          </div>
          <div
            className="class_tab"
            onClick={() => {
              setTab(3);
            }}
          >
            클래스 리뷰
          </div>
        </div>

        {tab === 1 ? (
          <div className="class_tabb1">
            {data.class_anounok === true ? (
              <div className="class_notice1">
                <div className="class_subtitle" style={{ width: '600px' }}>
                  클래스 전 숙지해주세요!
                </div>
                <div className="class_noticecircle">튜터공지</div>
                <br />
                <div className="minicontent">{data.class_anoun}</div>
              </div>
            ) : (
              ''
            )}

            <div className="class_notice3">
              <div className="class_subtitle">클래스 소개</div>
              <div className="minicontent">
                <div
                  dangerouslySetInnerHTML={{ __html: data.class_intro }}
                ></div>
              </div>
            </div>

            <div className="class_notice4">
              <div className="class_subtitle" style={{ marginBottom: '10px' }}>
                클래스 커리큘럼
              </div>
              <div className="minicontent">{data.class_curri}</div>
            </div>
            <br />
            <br />
            <br />
          </div>
        ) : tab === 2 ? (
          <div className="class_tabb1">
            <React.Fragment>
              <button className="class_reviewbtn" onClick={openModal3}>
                채팅방 입장
              </button>
              {/* //header 부분에 텍스트를 입력한다. */}
              <ChatRoom
                open={modalOpen3}
                close={closeModal3}
                header="채팅방"
                data={data}
                class_num={data.class_num}
              />
              {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
                      팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
            </React.Fragment>
          </div>
        ) : (
          <div className="class_tabb1">
            <div className="class_review">
              <div className="class_subtitle">실제 수강생 리뷰</div>

              <div className="class_reviewtitle">
                <div className="class_reviewcnt">★★★★★ 4.9 (180개)</div>

                <React.Fragment>
                  <button className="class_reviewbtn" onClick={openModal2}>
                    리뷰 작성하기
                  </button>
                  {/* //header 부분에 텍스트를 입력한다. */}
                  <ReviewModal
                    open={modalOpen2}
                    close={closeModal2}
                    header="리뷰 작성"
                  />
                  {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
                            팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
                </React.Fragment>
              </div>
              <ClassReview />
            </div>
          </div>
        )}
        {/* class detail info */}

        <div>
          <img src={banner} alt="" width="1290px" />
          <div className="tyu">
            <button
              type="button"
              onClick={() => {
                navi('/class/list');
              }}
            >
              목록
            </button>
            <button
              type="button"
              onClick={() => {
                navi('/class/form');
              }}
            >
              상품추가
            </button>
            <button
              type="button"
              onClick={() => {
                navi(`/class/updateform/`);
              }}
            >
              수정
            </button>
            <button type="button" onClick={handleClickOpen}>
              삭제
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">상품 삭제</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {data.sangpum}을 삭제하시겠습니까?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button onClick={onDelete} autoFocus>
                  확인
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
