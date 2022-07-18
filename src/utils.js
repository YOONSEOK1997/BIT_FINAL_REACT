const token = 'token';
const keyProfile = 'profile';
const keyNickName = 'nickname';

export const setToken = restoken => {
  return localStorage.setItem(token, restoken);
};

export const getToken = () => {
  return localStorage.getItem(token);
};

export const setProfile = profile => {
  return localStorage.setItem(keyProfile, profile);
};

export const getProfile = () => {
  return localStorage.getItem(keyProfile);
};

export const setNickname = nickname => {
  return localStorage.setItem(keyNickName, nickname);
};

export const getNickName = () => {
  return localStorage.getItem(keyNickName);
};

export const removeProfile = () => {
  return localStorage.removeItem(keyProfile);
};

export const removeNickName = () => {
  return localStorage.removeItem(keyNickName);
};

export const removeToken = () => {
  return localStorage.removeItem(token);
};
