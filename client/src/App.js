import './App.css';
import Video from "./components/Video/Video.js"

function App() {
  return (
    <div className="app">
        <div className="appVideos">
            <Video className="reactPlayer"/>
            <Video className="reactPlayer"/>
        </div>
    </div>
  );
}

export default App;
