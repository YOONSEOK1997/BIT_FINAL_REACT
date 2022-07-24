import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

function Sidebar() {
  const menus = [
    { name: '내 프로필', path: '/mypage' },
    { name: '결제 내역', path: '/mypage/payment' },
    { name: '찜한 클래스', path: '/mypage/liked' },
    { name: '수강중인 클래스', path: '/mypage/classes' },
    { name: '튜터 페이지', path: '/mypage/tutor' },
  ];
  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{
                color: 'gray',
                textDecoration: 'none',
              }}
              to={menu.path}
              key={index}
              activeStyle={{ color: 'black' }}
            >
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
