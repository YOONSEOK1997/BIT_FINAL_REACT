import React from 'react';

const PassChangeModal = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button onClick={close}>&times;</button>
          </header>
          <main>{props.children}비밀번호 입력 : 비밀번호 확인 : </main>
          <footer>
            <button>변경하기</button>
            <button onClick={close}>닫기</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default PassChangeModal;
