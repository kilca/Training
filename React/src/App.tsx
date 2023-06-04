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
    <main className="flex min-h-screen  items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center align-center font-mono text-sm flex-col lg:flex">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="/project/:id" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
