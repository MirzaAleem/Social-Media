import React, { Suspense,lazy } from 'react';
import './home.css';

const Topbar = lazy(() => import('../../components/topbar/Topbar'));
const Sidebar = lazy(() => import('../../components/sidebar/Sidebar'));
const Feed = lazy(() => import('../../components/feed/Feed'));
const Rightbar = lazy(() => import('../../components/rightbar/Rightbar'));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </Suspense>
    </>
  );
}

