import { RouterProvider } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <div id="app-div">
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;