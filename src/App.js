import React, { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/home/Home'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home/>
    </Suspense>
  );
}

export default App;
