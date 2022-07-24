import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <SidebarMenu>{menu.name}</SidebarMenu>
    </div>
  );
}

export default SidebarItem;

const SidebarMenu = styled.div`
  color: #111;
  font-size: 20px;
  font-family: Noto Sans KR;
  font-weight: 500;
  width: 200px;
  height: 30px;
  border: 1px solid gray;
  text-align: center;
  margin-top: 10px;
  display: inline-block;
`;
