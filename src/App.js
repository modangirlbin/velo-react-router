import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      {/* <a href='/about'>링크</a> //요래하면 네트워크탭 모든파일 로드되버림 */}
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} /> 
        {/* : 이후의 부분이 url 파라미터 */}
        {/* <Route path="/profiles/:username/:id" element={<Profile />} />  */}
      </Routes>
    </div>
  );
}

export default App;
