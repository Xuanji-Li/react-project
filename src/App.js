import logo from './logo.svg';
import './App.css';
import NameCard from './component/NameCard'
import LikesButton from './component/LikesButton';
import DigitalCloud from './component/DigitalClock'
import CommentBox from './component/CommentBox';
const tags=['恐龙','足球小子'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NameCard name="manny" number="123456" isHuman tags={tags}></NameCard>
      <LikesButton />
      <DigitalCloud />
      <CommentBox />
    </div>
  );
}

export default App;
