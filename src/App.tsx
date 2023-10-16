import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/tailwind.css';
import Landing from './pages/Landing';
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;