import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import VodMain from './pages/VodMain/VodMain';
import Login from './pages/Login/Login';
import WishList from './pages/WishList/WishList';
import LectureList from './pages/LectureList/LectureList';
import LectureDetail from './pages/LectureDetail/LectureDetail';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Review from './components/Review/Review';
import About from './pages/About/About';

import {
  ClassList,
  ClassForm,
  ClassDetail,
  ClassUpdateForm,
  ClassGuide,
  ClassIntroGuide,
} from './pages/class';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vod" element={<VodMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lectures" element={<LectureList />} />
        <Route path="/lectures/:id" element={<LectureDetail />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/review" element={<Review />} />

        {/* Class */}
        <Route path="/class/list" element={<ClassList />} />
        <Route path="/class/form" element={<ClassForm />} />
        <Route path="/class/detail/:num" element={<ClassDetail />} />
        <Route path="/class/updateform/:num" element={<ClassUpdateForm />} />
        <Route path="/class/guide" element={<ClassGuide />} />
        <Route path="/class/introguide" element={<ClassIntroGuide />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
