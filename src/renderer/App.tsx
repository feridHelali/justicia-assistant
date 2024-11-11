import React from 'react';
import { Box,  Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import HomePage from './pages/HomePage';
import AffairPage from './pages/AffairPage';
import './styles/rtl.css';
import StatusBar from './components/StatusBar';
import AffairForm from './components/affair/AffairForm';


const App: React.FC = () => {
    return (
        <Router>
            <Flex direction="row">
                <SideNav />
                <Box p={4} flex="1">
                    <Routes>

                        <Route path="/affairs" element={<AffairPage />} />
                        <Route path="/affair-form" element={<AffairForm />} />
                        <Route path="/affair-form/:affairId" element={<AffairForm />} />
                        <Route path="/" element={<HomePage />} />

                    </Routes>
                    <StatusBar />
                </Box>
            </Flex>
        </Router>
    );
};

export default App;
