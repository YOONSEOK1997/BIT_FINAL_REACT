import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const about = () => {
  return (
    <div>
      <h1>우리</h1>
      <div className="about">
        <h2>탈잉을 소개합니다.</h2>
        <span style={{ color: 'red' }}>안녕</span>
      </div>
    </div>
  );
};

export default about;
