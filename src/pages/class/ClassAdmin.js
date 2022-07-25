import React from 'react';
import './ClassAdmin.css';
import './ClassGuide.css';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import river from './classImage/aa캡처2.jpg';
const ClassAdmin = () => {
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
              <th>이름</th>
              <th>닉네임</th>
              <th>생년월일</th>
              <th>가입일</th>
              <th>신청일</th>
              <th>승인여부</th>
            </tr>
            <tr>
              <td>1</td>
              <td>홍대한</td>
              <td>홍카이</td>
              <td>940719</td>
              <td>2021-08-19</td>
              <td>2021-08-19</td>
              <td>
                <select>
                  <option key="apple" value="승인">
                    승인
                  </option>
                  <option key="orange" value="대기" selected>
                    대기
                  </option>
                  <option key="grape" value="거부">
                    거부
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>강경애</td>
              <td>강여사</td>
              <td>690512</td>
              <td>2021-08-19</td>
              <td>2021-08-19</td>
              <td>
                <select>
                  <option key="apple" value="승인">
                    승인
                  </option>
                  <option key="orange" value="대기" selected>
                    대기
                  </option>
                  <option key="orange" value="거부">
                    거부
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>최윤석</td>
              <td>윤식</td>
              <td>940719</td>
              <td>2021-08-19</td>
              <td>2021-08-19</td>
              <td>
                <select>
                  <option key="apple" value="승인">
                    승인
                  </option>
                  <option key="orange" value="대기">
                    대기
                  </option>
                  <option key="orange" value="거부">
                    거부
                  </option>
                </select>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <br />
          <br />
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
