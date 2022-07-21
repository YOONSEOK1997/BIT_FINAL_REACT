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
import Register from './pages/Register/Register';
import ClassList2 from './pages/class/ClassList2';
import ClassList3 from './pages/class/ClassList3';

import {
  ClassList,
  ClassForm,
  ClassDetail,
  ClassUpdateForm,
  ClassGuide,
  ClassIntroGuide,
} from './pages/class';

import PayMent from './pages/class/PayMent';
import ClassPayBefore from './pages/class/ClassPayBefore';
import ClassPayAfter from './pages/class/ClassPayAfter';
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vod" element={<VodMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lectures" element={<LectureList />} />
        <Route path="/lectures/:id" element={<LectureDetail />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/review" element={<Review />} />

        {/* Class */}
        <Route path="/class/list" element={<ClassList />} />
        <Route path="/class/form" element={<ClassForm />} />
        <Route path="/class/detail/:class_num" element={<ClassDetail />} />
        <Route
          path="/class/updateform/:class_num"
          element={<ClassUpdateForm />}
        />
        <Route path="/class/guide" element={<ClassGuide />} />
        <Route path="/class/introguide" element={<ClassIntroGuide />} />
        <Route path="/class/payment" element={<PayMent />} />
        <Route path="/class/payment/before" element={<ClassPayBefore />} />
        <Route path="/class/payment/after" element={<ClassPayAfter />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
