import React from 'react';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { GithubProvider } from './context/GithubContext';

function App() {
  return (
    <GithubProvider>
    <RouterProvider router={router} />
    </GithubProvider>
  );
}

export default App;
