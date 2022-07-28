import React from 'react';
import './MainClass.css';
import surf from '../images/surf_board.png';
import { NavLink } from 'react-router-dom';
const MainVod = () => {
  return (
    <div className="mainvod">
      <ul class="imglist_ul">
        <li>
          <NavLink style={{ textDecoration: 'none' }} to="/moim/list">
            <div className="a">
              <div class="screen2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={surf} alt="" />
              </div>
              <h3>이게 모임</h3>
              <p>이게 모예요</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none' }} to="/moim/list">
            <div className="a">
              <div class="screen2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={surf} alt="" />
              </div>
              <h3>저게 모임</h3>
              <p>저건뭐예요</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none' }} to="/moim/list">
            <div className="a">
              <div class="screen2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={surf} alt="" />
              </div>
              <h3>이름이 뭐예요</h3>
              <p>전화번호 뭐예요</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainVod;
