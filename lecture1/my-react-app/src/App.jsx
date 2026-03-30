import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState('in');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setStage('out');
    }
  }, [location]);

  const handleTransitionEnd = () => {
    if (stage === 'out') {
      setDisplayLocation(location);
      setStage('in');
    }
  };

  return (
    <Box
      onTransitionEnd={handleTransitionEnd}
      sx={{
        opacity: stage === 'out' ? 0 : 1,
        transform: stage === 'out' ? 'scale(0.97)' : 'scale(1)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Box>
  );
}

export default App;
