import React from 'react';
import { Box,  Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import './styles/rtl.css'; 
import HomePage from './pages/HomePage';



const App: React.FC = () => {
  return (
    <Router>
      <Flex direction="row">
        <SideNav />
        <Box p={4} flex="1">
          <Routes>
            <Route path='/affairs' element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
        
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
};

export default App;