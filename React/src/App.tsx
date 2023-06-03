import './App.css';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ProjectPage from './page/Project/ProjectPage';
import TaskPage from './page/Task/TaskPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="/project/:id" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
