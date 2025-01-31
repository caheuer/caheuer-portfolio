import { BrowserRouter, StaticRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Project = lazy(() => import('./pages/Project'));
const NotFound = lazy(() => import('./pages/NotFound'));


function App({ location }: { location?: string }) {
  const Router = typeof location === 'undefined' ? BrowserRouter : StaticRouter;
  const routerProps = location ? { location: '/' + location } : {};

  return <Router {...(routerProps as any)}>
    <Header />
    <Routes>
      <Route path="/" element={<Sus><Home /></Sus>} />
      <Route path="/projects" element={<Sus><Projects /></Sus>} />
      <Route path="/projects/:id" element={<Sus><Project /></Sus>} />
      <Route path="*" element={<Sus><NotFound /></Sus>} />
    </Routes>
    <Footer />
  </Router>;
}

function Sus({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default App;