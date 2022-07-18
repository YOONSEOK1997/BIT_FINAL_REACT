import { useNavigate } from 'react-router-dom';
import API from '../../config';
import { setToken, setProfile, setNickname } from '../../utils';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();

  function kakaLogin() {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image',
      success: function (res) {
        fetch(`${API.join}`, {
          method: 'POST',
          headers: {
            Authorization: res.access_token,
          },
        })
          .then(res => {
            return res.json();
          })
          .then(res => {
            const restoken = res.access_token;
            const profile = res.profile_image;
            const nickname = res.kakao_nickname;
            setToken(restoken);
            setProfile(profile);
            setNickname(nickname);
            goToMain();
          });
      },
    });
  }
  const goToMain = () => {
    alert('로그인에 성공하였습니다.');
    navigate('/');
  };

  return (
    <LoginSection>
      <LoginBox>
        <MainImg
          alt="로그인배경이미지"
          src="/images/login background img.jpg"
        />
        <PromotionalText>가입 즉시 12만원 쿠폰팩을 드려요!</PromotionalText>
        <KaKaoBtn type="button" onClick={kakaLogin}>
          <KakaoLoginImg
            alt="카카오로그인이미지"
            src="/images/kakao_login_medium_wide.png"
          />
        </KaKaoBtn>
      </LoginBox>
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.section`
  min-height: calc(100vh - 500px);
  padding: 130px 0 200px;
  text-align: center;
  ${props => props.theme.wrapper};
`;

const LoginBox = styled.div`
  width: 420px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #eee;
`;

const MainImg = styled.img`
  width: 70%;
  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
`;

const PromotionalText = styled.h2`
  margin: 20px 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
`;

const KaKaoBtn = styled.button`
  border: none;
  background-color: white;
`;

const KakaoLoginImg = styled.img`
  margin: 5px 0;
  &:hover {
    cursor: pointer;
  }
`;
