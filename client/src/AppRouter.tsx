import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Page404 from './Page404';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home view="tech" />,
    errorElement: <Page404 view="tech" />
  },
  {
    path: "/tech",
    element: <Home view="tech" />,
    errorElement: <Page404 view="tech" />
  },
  {
    path: "/photography",
    element: <Home view="photography" />,
    errorElement: <Page404 view="photography" />
  }
]);

export default AppRouter;