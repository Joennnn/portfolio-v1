import { Routes, Route } from "react-router-dom";
import { Layout, About, Project, Home, ErrorPage } from './components'
import './App.scss';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
