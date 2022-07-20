import React, { useState, useEffect } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ClassBoard = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const { currentPage } = useParams();

  let pagelistUrl =
    process.env.REACT_APP_SPRING_URL +
    'board/pagelist?currentPage=' +
    currentPage;
  let photoUrl = process.env.REACT_APP_SPRING_URL + 'save/';

  //시작시 호출되는 함수
  const pageList = () => {
    axios
      .get(pagelistUrl) //pagelistUrl을 호출하면
      .then(res => {
        //그러면 실행한다
        setData(res.data); //Data에 모든 넘어온 값을 넣는다
      });
  };

  //처음 시작시에 pageList 호출
  useEffect(() => {
    pageList();
  }, [currentPage]); //currentPage가 변경될때마다 호출

  return (
    <div className="MoimBoard">
      <div className="board_buttons">
        <Button variant="outlined" id="wrtie_button">
          글쓰기
        </Button>
        {/* <Button variant="outlined" disabled>
  Disabled
</Button> */}
        <Button
          variant="outlined"
          style={{ borderColor: 'yellowgreen' }}
          id="edit_button"
          href="#outlined-buttons"
        >
          수정
        </Button>
        <Button
          variant="outlined"
          style={{ borderColor: 'red' }}
          id="delete_button"
          href="#outlined-buttons"
        >
          삭제
        </Button>
      </div>
      <div className="board_content">
        {data.list &&
          data.list.map(row => (
            <div className="board_boards">
              <div className="boards_profile">
                <img
                  alt=""
                  className="photo_profile"
                  src={photoUrl + row.photo}
                />
              </div>
              <div className="boards_title">
                <span> {row.subject} </span>
              </div>
              <div className="boards_content">
                <span>{row.content}</span>
              </div>
              <div className="boards_writeday">
                <span>{row.writeday}</span>
              </div>
              <div className="boards_like">
                <span>
                  <FavoriteBorderIcon
                    style={{ fontSize: '20px', color: 'red', height: '20px' }}
                  />
                </span>
                32
              </div>
              <div className="boards_comment">
                <span>Comment</span>
              </div>
              <div className="boards_photo">업로드한사진</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClassBoard;
