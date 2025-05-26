import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="animated-gradient">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>

  );
}

export default App;