import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav/>
        <Home/>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Nav/>
    </RouterProvider>
  </React.StrictMode>,
)
