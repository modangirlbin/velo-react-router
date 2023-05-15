// /profile/velopert 이런식으로 url 뒷부분에 username 을 넣어줄 때 해당 값을 파라미터로 받아와보자.

import React from 'react';
import { useParams } from 'react-router-dom';

// 프로필에서 사용 할 데이터
const profileData = {
  hyebin: {
    name: '이혜빈',
    description:
      '씩씩한 친구'
  },
  reagi: {
    name: '래기',
    description: '멋있는 고양이'
  }
};

const Profile = () => {
  // url파라미터 usename값 추출
  const {username} = useParams();
  // const {username, id} = useParams();
  console.log(username);
  const profile = profileData[username];
  if(!profile){
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;

// * useParams
// react-router에서 제공하는 Hooks 중 하나로 React 16.8 버전 이상에서만 구동이 가능하다. Parameter(파라미터) 값을 URL을 통해서 넘겨서 넘겨받은 페이지에서 사용할 수 있도록 도와준다.

// 예를 들어, 여러 개의 영화 정보가 담겨있는 데이터를 출력해준다고 가정할 때, 영화 제목을 클릭해서 세부 페이지로 이동을 하도록 구현한다면, 영화의 id 값을 URL로 넘겨 세부 페이지에 id 값에 해당하는 영화 정보만 출력하도록 만들 수 있도록 도와준다.
// https://babycoder05.tistory.com/entry/useParams-%EB%A1%9C-%EC%84%B8%EB%B6%80-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%9D%BC%EC%9A%B0%ED%8C%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0