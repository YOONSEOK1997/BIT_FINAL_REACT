import axios from 'axios';

const SPRING_URL = 'http://localhost:9009/';

//POST {사용자 이름, 이메일, 비밀번호}
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

//JWT로컬 저장소에서 제거
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('loginok');
  localStorage.removeItem('username');
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
};
export default AuthService;
