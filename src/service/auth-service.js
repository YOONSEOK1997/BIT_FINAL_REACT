import axios from 'axios';
import { setToken, setProfile, setNickname } from '../utils';

const SPRING_URL = 'http://localhost:9009/';

//POST {사용자 이름, 이메일, 비밀번호} // 사용안함
const register = (username, password) => {
  return axios.post(SPRING_URL + 'api/signup', { username, password });
};

// POST {username, password} & JWT로컬 저장소에 저장
const login = (username, password) => {
  return axios
    .post(
      SPRING_URL + 'api/authenticate',
      { username, password },
      { withCredentials: true }
    )
    .then(response => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};
const executeHelloService = () => {
  console.log('===executeHelloService===');
  return axios.get(SPRING_URL + '/hello');
};

//USER정보 불러오기
const getProfile = username => {
  return axios
    .get(SPRING_URL + 'api/getprofile?username=' + username)
    .then(response => {
      let photoUrl = 'http://localhost:9009/save/';

      setNickname(response.data.realname);
      setProfile(photoUrl + response.data.profile);
    });
};

//JWT로컬 저장소에서 제거
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('loginok');
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  localStorage.removeItem('nickname');
  localStorage.removeItem('profile');
  window.location.reload();
};

//저장된 사용자 정보 가져오기(JWT 포함)
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  executeHelloService,
  getProfile,
};
export default AuthService;
