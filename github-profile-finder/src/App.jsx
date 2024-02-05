import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from "./components/layout/Footer";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
const router = createBrowserRouter([
  {
    path: "/",
    element:<> <Navbar /><Home/><Footer /></>,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <><Navbar /><About /><Footer/></>,
    errorElement: <NotFound />,
  },
]);

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
