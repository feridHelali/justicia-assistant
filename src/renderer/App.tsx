import React from 'react';
import { Box,  Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import HomePage from './pages/HomePage';
import AffairPage from './pages/AffairPage';
import './styles/rtl.css';
import StatusBar from './components/StatusBar';
import AffairForm from './components/affair/AffairForm';
import CourtMatierPage from './pages/CourtMatierPage';
import CourtPhasePage from './pages/CourtPhasePage';
import UsersPage from './pages/UsersPage';
import CourtsPage from './pages/CourtsPage';


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
                        <Route path="/courts" element={<CourtsPage />} />
                        <Route path="/courts/:courtId" element={<CourtsPage />} />
                        <Route path="/court-matier" element={<CourtMatierPage />} />
                        <Route path="/court-matier/:courtMatierId" element={<CourtMatierPage />} />
                        <Route path="/court-phase" element={<CourtPhasePage />} />
                        <Route path="/court-phase/:courtPhaseId" element={<CourtPhasePage />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="/users/:userId" element={<UsersPage />} />
                        <Route path="/" element={<HomePage />} />

                    </Routes>
                    <StatusBar />
                </Box>
            </Flex>
        </Router>
    );
};

export default App;
