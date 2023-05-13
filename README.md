https://github.com/modangirlbin/velo-react-router

## 5장 - Router
5.0 소개
- 라우터 라이브러리   
  - next.js: 서버사이드 랜더링 쉽게 구현가능, 파일경로/이름 기반 라우팅   
  - react-router: 컴포넌트 기반 
- react-router주요 컴포넌트
  - <BrowserRouter>: HTML5 History API사용, 경로바꿀때 주소만 바꾸고 페이지는 다시 불러오지 않음
  - <HashRouter>: example.com/#/path/to/route #사용, 옛날브라우저 전용
  - <MemoryRouter>: 브라우저 아닌환경, 임베디드 웹앱(특정부분만 리엑트로 된 환경이나), 리액트 네이티브 등에서 사용
  - <StaticRouter>: 서버사이드 렌더링에 사용
  - <Route>: 라우트를 정의할 때 사용하는 컴포넌트
  - <Link>: 사용한 Router의 주소를 바꿈 a태그지만 새로고침 안됨
5.1 프로젝트 준비 및 Router 기본사용법: BrowserRouter, Routes, Route, Link   
    v6) component={About} -> element={<Profile />}
5.2 파라미터와 쿼리: url 파라미터, 쿼리에 따른 컴포넌트 렌더링
  - 파라미터 받아올땐 usePrams
  - 쿼리받아올땐 useLocation : qs설치 $ yarn add qs   
  v6) {match} -> usePrams, {location} -> useLocation
