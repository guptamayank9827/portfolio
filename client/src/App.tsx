import { RouterProvider } from 'react-router-dom';
import AppRouter from './AppRouter';
import { Container } from '@chakra-ui/react';
import { useColorModeValue } from './components/ui/color-mode';

import './App.css';

function App() {
  return (
    <div id="app-div">
      <Container centerContent={true} fluid={true} paddingX={{ base:4, lg:48 }} bgColor={useColorModeValue("light.600", "dark.600")}>
        <RouterProvider router={AppRouter} />
      </Container>
    </div>
  );
}

export default App;