import React, { useState, useEffect } from 'react';
import Editor from '../class/EditorWithUseQuill';
import './ClassBoardForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ClassBoardForm = () => {
  const [data, setData] = useState({
    moim_name: '',
    moim_leader: '',
    moim_place: '',
    moim_count: '',
    moim_photo: '',
    moim_content: '',
  });
  const [moim_category, setMoim_category] = useState('스냅사진');
  const navi = useNavigate();
  //submit 시 호출될 함수
  const onSave = e => {
    e.preventDefault(); //기본 이벤트를 무효화
    const url = process.env.REACT_APP_SPRING_URL + 'moim/insert';
    axios.post(url, data).then(res => {
      alert('insert 성공');
      //navi("/login")
    });
  };
  //data 관련 데이터 입력시 호출
  const onDataChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  const [moim_place, setMoim_place] = useState('반포');
  return (
    <div className="moimform_content">
      <form className="form-inline" onSubmit={onSave}>
        <br></br>
        <br></br>
        <br></br>
        <h1> 모임등록</h1>
        <br></br>
        <div className="label1">모임명</div>
        <input
          type="text"
          className="form-control"
          name="moim_name"
          style={{ width: '640px', height: '70px' }}
          placeholder="모임명 입력"
          onChange={onDataChange}
        />
        <br></br>
        <div style={{ display: 'block' }}>
          <div style={{ display: 'inline-block' }}>
            <div className="label1">방장</div>
            <input
              type="text"
              className="form-control"
              name="moim_leader"
              onChange={onDataChange}
              style={{
                width: '200px',
                height: '70px',
                display: 'inline-block',
              }}
              placeholder="방장"
            />
          </div>
          <div style={{ display: 'inline-block' }}>
            <div className="row">
              <div className="label1">카테고리</div>
              <select
                className="label2"
                value={moim_category}
                onChange={e => {
                  setMoim_category(e.target.value);
                }}
              >
                <option key="apple" value="문화공연">
                  문화공연
                </option>
                <option key="orange" value="운동">
                  운동
                </option>
                <option key="orange" value="사교인맥">
                  사교인맥
                </option>
                <option key="orange" value="마음챙김">
                  마음챙김
                </option>
                <option key="orange" value="취미">
                  취미
                </option>
                <option key="orange" value="공부">
                  공부
                </option>
                <option key="orange" value="드로잉">
                  드로잉
                </option>
              </select>
            </div>
            <div className="label1">장소</div>
            <select
              className="label2"
              style={{ marginLeft: '0px', width: '640px' }}
              value={moim_place}
              onChange={e => {
                setMoim_place(e.target.value);
              }}
            >
              <option key="apple" value="반포">
                반포 한강공원
              </option>
              <option key="orange" value="잠실">
                잠실 한강공원
              </option>
              <option key="melon" value="이촌">
                이촌 한강공원
              </option>
              <option key="banana" value="여의도">
                여의도 한강공원
              </option>
              <option key="grape" value="난지">
                난지 한강공원
              </option>
              <option key="vvs" value="뚝섬">
                뚝섬 한강공원
              </option>
            </select>
          </div>
        </div>
        <br></br>
        <div style={{ display: 'block' }}>
          <div style={{ display: 'inline-block' }}>
            <div className="label1">정원</div>
            <input
              type="text"
              className="form-control"
              name="moim_count"
              onChange={onDataChange}
              style={{
                width: '200px',
                height: '70px',
                display: 'inline-block',
              }}
              placeholder="정원"
            />
          </div>
          <div style={{ display: 'inline-block' }}>
            <div className="label1">사진</div>
            <input
              type="file"
              className="form-control"
              name="moim_photo"
              onChange={onDataChange}
              style={{
                width: '200px',
                height: '70px',
                display: 'inline-block',
              }}
              placeholder="사진"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div style={{ width: '880px' }}>
          <h3>모집글 작성</h3>
          <Editor placeholder={'Write something...'} />
        </div>
        <br />
        <br />
        <br />
        <button class="w-btn w-btn-gra3 w-btn-gra-anim" type="submit">
          모임 등록
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};
export default ClassBoardForm;
