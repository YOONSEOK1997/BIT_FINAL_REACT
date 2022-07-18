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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
