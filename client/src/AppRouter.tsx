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
    errorElement: <Page404 />,
    children: [
      {
        path: "tech",
        element: <Home />
      }
    ]
  },
  {
    path: "/tech",
    element: <Home />,
    errorElement: <Page404 />
  }
]);

export default AppRouter;