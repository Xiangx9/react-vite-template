import React, { Suspense } from "react";
import { useRoutes, Link } from 'react-router-dom';
import Router from '@/router/routes';

function App() {
  return <div >
    <Suspense fallback="Loading...">
      <div >
        {useRoutes(Router)}
      </div>
    </Suspense>
  </div>;
};

export default App;
