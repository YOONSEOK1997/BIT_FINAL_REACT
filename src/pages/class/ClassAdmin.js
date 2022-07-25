import React, { useEffect, useState } from 'react';
import './ClassAdmin.css';
import './ClassGuide.css';
import river from './classImage/aa캡처2.jpg';
import axios from 'axios';
import styled from 'styled-components';

const ClassAdmin = () => {
  const [data, setData] = useState([]);
  //전역변수등록
  const SPRING_URL = process.env.REACT_APP_SPRING_URL;
  //url등록
  let Url = SPRING_URL + 'tutor/list';
  let agUrl = SPRING_URL + 'tutor/list';
  let disUrl = SPRING_URL + 'tutor/list';

  const list = () => {
    axios.post(Url).then(res => {
      setData(res.data);
    });
  };

  const agree = () => {
    axios.post(Url).then(res => {
      setData(res.data);
    });
  };

  const disagree = () => {
    axios.post(disUrl).then(res => {
      setData(res.data);
    });
  };
  useEffect(() => {
    list();
    console.log(data);
  }, []);
  return (
    <div>
      <div className="TY">
        <img
          alt=""
          src={river}
          className="classguideimg"
          style={{
            width: '1040px',
            height: '130px',
            marginLeft: '370px',
            marginTop: '50px',
          }}
        />
        <div
          className="logoguide"
          style={{ width: '150px', height: '150px' }}
        ></div>
        <Wrapper>
          <div className="guidetitle1">👊 튜터를 승인해주세요! 🙌💖</div>
          <br />
          <table
            className="admin table table-bordered"
            style={{ width: '1040px', marginLeft: '280px' }}
          >
            <tr>
              <th>NO</th>
              <th>아이디</th>
              <th>이름</th>
              <th>신청일</th>
              <th colSpan="2">승인여부</th>
              <th></th>
            </tr>
            {data &&
              data.map((row, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{row.username}</td>
                  <td>{row.realname}</td>
                  <td>{row.ask_date}</td>
                  <td style={{ cursor: 'pointer', width: '70px' }}>✔️</td>
                  <td style={{ cursor: 'pointer', width: '50px' }}>❌</td>
                </tr>
              ))}
          </table>
        </Wrapper>
      </div>
    </div>
  );
};

export default ClassAdmin;

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
  margin-top: 150px;
  width: 1040px;
  position: relative;
  padding-bottom: 20px;
  height: 2000px;
  margin-left: 100px;
`;
