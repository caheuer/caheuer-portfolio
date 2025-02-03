import { BrowserRouter, StaticRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App({ location }: { location?: string }) {
  const Router = typeof location === 'undefined' ? BrowserRouter : StaticRouter;
  const routerProps = location ? { location: '/' + location } : {};

  return <Router {...(routerProps as any)}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>;
}

export default App;