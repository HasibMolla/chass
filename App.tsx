
import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './pages/Home';
import DiseaseDetector from './pages/DiseaseDetector';
import Weather from './pages/Weather';
import Calculators from './pages/Calculators';
import Marketplace from './pages/Marketplace';
import Advisory from './pages/Advisory';
import CropGuide from './pages/CropGuide';
import CropDetail from './pages/CropDetail';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="disease" element={<DiseaseDetector />} />
            <Route path="weather" element={<Weather />} />
            <Route path="calculators" element={<Calculators />} />
            <Route path="market" element={<Marketplace />} />
            <Route path="advisory" element={<Advisory />} />
            <Route path="guide" element={<CropGuide />} />
            <Route path="guide/:id" element={<CropDetail />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
