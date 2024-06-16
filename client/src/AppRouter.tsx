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
        path: "home",
        element: <Home />
    }
]);

export default AppRouter;