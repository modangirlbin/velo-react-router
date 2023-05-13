import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

// 쿼리를 조회할때는 location
function About() {
  let location = useLocation();
  // console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 물음표제거
  })
  const detail = query.detail === 'true'; // 문자열
  console.log(query);
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 실습 예제</p>
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  );
};

export default About;