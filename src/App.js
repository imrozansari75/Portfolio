import MainLayout from "./layouts/MainLayout";
import { HashRouter } from 'react-router-dom';
import bgVideo from '../src/assets/bgvideo.mp4';

function App() {
  return (

    <div className="animated-gradient">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <HashRouter>
        <MainLayout />
      </HashRouter>
    </div>

  );
}

export default App;