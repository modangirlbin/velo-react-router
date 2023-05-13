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

// useParams: url파라미터
const Profile = () => {
  const {username} = useParams();
  // const {username, id} = useParams();
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