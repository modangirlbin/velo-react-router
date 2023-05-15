// /about?details=true 이런식으로 url 뒷부분의 쿼리를 받아와보자.

import React from 'react';
import { useSearchParams } from 'react-router-dom';
// import qs from 'qs';

function About() {
  // 1. useLocation사용 : qs설치 및 물음표 제거 필요
  // let location = useLocation();
  // const query = qs.parse(location.search, {
  //   ignoreQueryPrefix: true // 물음표제거
  // })
  // const detail = query.detail === 'true'; // 문자열

  // 2. useSearchParams사용
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 실습 예제</p>
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  );
};

export default About;

// 쿼리는 URL 주소에서 ?가 나오는 시점 뒤의 선언된 데이터들을 의미합니다. 일반적으로 web api 중에 location이라는 객체가 있는데, location.search를 통해 쿼리 정보에 접근할 수 있습니다.
// useSearchParams는 단독으로 데이터를 파싱해 주는 반면에, useLocation은 qs와 같은 패키지가 필요하다는 차이가 있습니다.