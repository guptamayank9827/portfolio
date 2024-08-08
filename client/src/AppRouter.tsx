import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Page404 from './Page404';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />
  },  
  {
    path: "/portfolio",
    element: <Home />,
    errorElement: <Page404 />
  },
  {
    path: "tech",
    element: <Home />
  }
]);

export default AppRouter;