import React, { useState, useEffect } from 'react';
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

const ClassDetail = () => {
  const { num } = useParams();
  const [data, setData] = useState('');
  const navi = useNavigate();

  // alert MUI (삭제 다이얼로그 코드 추가)
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //전역변수등록
  const SPRING_URL = process.env.REACT_APP_SPRING_URL;

  //url등록
  let detailUrl = SPRING_URL + 'class/detail?num=' + num;
  let photoUrl = SPRING_URL + 'save/';
  let deletelUrl = SPRING_URL + 'class/delete?num=' + num;

  //스프링으로부터 num에 해당하는 data받기
  const onDataReceive = () => {
    axios.get(detailUrl).then(res => {
      //res에 dto가 들어있음
      //console.log(res.data.sangpum); 상품명 출력 확인
      setData(res.data);
    });
  };

  //삭제시 호출 할 함수
  const onDelete = () => {
    axios.delete(deletelUrl).then(res => {
      //삭제 후 목록으로 이동
      navi('/class/list');
    });
    handleClose(); //다이얼로그 창 닫기
  };

  //처음 랜더링시 위의 함수 호출
  useEffect(() => {
    onDataReceive();
  }, []);

  return (
    <div>
      <div className="content_container" style={{ marginLeft: '310px' }}>
        <div className="class_top">
          <div className="class_title_div">
            <span className="class_title">
              [원데이] 한강에서 제트스키 체험하기
            </span>
          </div>
          <div className="tutor_info">
            <div class="tutor_image" style={{ float: 'left' }}></div>
            <span className="tutor_name">홍대한 튜터</span>
          </div>
          {/* 이거 map으로 돌릴 수 있을거같은데 일단 */}
          <div className="class_image1"></div>
          <div className="imagemap">
            <div className="class_image"></div>
            <div className="class_image"></div>
            <div className="class_image"></div>
            <div className="class_image"></div>
          </div>
          <div className="class_info" style={{ float: 'right' }}>
            <div className="class_plan" style={{ float: 'left' }}>
              <span class="class_plann">클래스 일정</span>
            </div>
            <select className="plan">
              <option key="banana" value="banana">
                바나나
              </option>
              <option key="apple" value="apple">
                사과
              </option>
              <option key="orange" value="orange">
                오렌지
              </option>
            </select>
            <div className="class_plan_row">
              <span className="selectplan">2022-06-27 15:00~18:00</span>
              <br />
              <div style={{ marginTop: '15px' }}>
                {/* 인워선택 + / - */}
                <div className="perselect" style={{ marginTop: '5px' }}>
                  인원 선택
                </div>
                <input type="number" className="percnt"></input>
              </div>
            </div>
            {/* class_plan_row */}
            <div className="totcnt">
              <div className="money1">
                11,000원 / 시간 (인당)
                <div className="money2">33,000원 / 총 3시간</div>
              </div>
            </div>
            <div className="classbtn">
              <button className="class_signbtn">클래스 신청하기</button>
              <button className="class_likebtn">♥</button>
            </div>
          </div>{' '}
          {/* info */} <br />
        </div>
        {/* top */}

        <div className="class_summ">
          <div className="box">
            <div className="boxtext">반포공원</div>
          </div>
          <div className="box">
            <div className="boxtext">초~중급자</div>
          </div>
          <div className="box">
            <div className="boxtext">198개</div>
          </div>
          <div className="box">
            <div className="boxtext">
              시간당
              <br />
              18000원
            </div>
          </div>
          <div className="box">
            <div className="boxtext">정원 3명</div>
          </div>
        </div>

        <div className="class_tabsum">
          <div className="class_tab">클래스 소개</div>
          <div className="class_tab">클래스 커리큘럼</div>
          <div className="class_tab">클래스 리뷰</div>
        </div>

        {/* class detail info */}
        <div className="class_notice1">
          <div className="class_subtitle" style={{ width: '600px' }}>
            클래스 전 숙지해주세요!
          </div>
          <div className="class_noticecircle">튜터공지</div>
        </div>
        <div className="class_notice2">
          <div className="class_subtitle">클래스 요약</div>
        </div>
        <div className="class_notice3">
          <div className="class_subtitle">클래스 소개</div>
        </div>
        <div className="class_notice4">
          <div className="class_subtitle">클래스 커리큘럼</div>
        </div>

        {/* review */}
        <div className="class_review">
          <div className="class_subtitle">실제 수강생 리뷰</div>

          <div className="class_reviewtitle">
            <div className="class_reviewcnt">★★★★★ 4.9 (180개)</div>
            <button className="class_reviewbtn">리뷰 작성하기</button>
          </div>
          <div className="class_reviewrow">
            {/* 리뷰info */}
            <div className="class_reviewerinfo">
              <div class="tutor_image" style={{ float: 'left' }}></div>
              <span className="class_reviewername">김정하</span>
              <br />
              <span className="class_reviewertime">2022-07-04 03:58</span>
              <div className="class_review_star">★★★★★</div>
              <div className="class_reviewcontent">
                <span style={{ fontSize: '15px' }}>
                  수영을 배워본 적이 없어서 물에 뜨는법도 모르지만 세림쌤과
                  함께한 원데이클래스 경험이 너무 신비하고 재미있었어서 4월부터
                  오픈워터 자격증 코스도 따려고 계획중입니다! 외모도
                  완벽하시지만 2시간 30분 동안 친절하고 컴팩트하게 수업을
                  구성해주신 세림쌤 덕분에 같이 간 친구도 만족하고, 사진도 많이
                  건져왔어요ㅎㅎ
                </span>
              </div>
              <div className="class_reviewphoto"></div>
              <div className="commentlike"> ♥27 ㅁ12</div>
              {/* 댓글 */}
              <div className="class_reviewcomment">
                <div className="re_info">
                  <div class="tutor_image" style={{ float: 'left' }}></div>
                  <span className="class_reviewername">이경주</span>
                  <br />
                  <span className="class_reviewertime">2022-07-04 03:58</span>
                </div>
                <div className="class_commentbody" style={{ fontSize: '15px' }}>
                  하하하 저도 배우고싶네용
                </div>
                <div className="class_commentdell">
                  <button
                    style={{ float: 'right', marginTop: '5px' }}
                    className="btn4"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
            {/* class_reviewrow */}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
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
              navi(`/class/updateform/${num}`);
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
  );
};

export default ClassDetail;
