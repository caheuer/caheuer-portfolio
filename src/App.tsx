import { BrowserRouter, StaticRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Header from './Header';

const Home = lazy(() => import('./pages/Home'));

function App({ location }: { location?: string }) {
  const Router = typeof location === 'undefined' ? BrowserRouter : StaticRouter;
  const routerProps = location ? { location } : {};

  return <Router {...(routerProps as any)}>
    <Header />
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
    </Routes>
  </Router>;
}

export default App;