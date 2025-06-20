import { RouterProvider } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div id="app-div">
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;