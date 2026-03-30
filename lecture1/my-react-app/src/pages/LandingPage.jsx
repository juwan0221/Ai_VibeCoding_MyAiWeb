import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function LandingPage() {
  const navigate = useNavigate();
  const orbRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      orbRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft 3D Orb */}
      <Box
        ref={orbRef}
        className="float-anim"
        sx={{
          position: 'absolute',
          right: { xs: '-10%', md: '6%' },
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 240, sm: 320, md: 440 },
          height: { xs: 240, sm: 320, md: 440 },
          borderRadius: '62% 38% 56% 44% / 48% 44% 56% 52%',
          background:
            'radial-gradient(circle at 32% 32%, #C9DAFA 0%, #7BAAE8 38%, #3A7BD5 68%, #1A4FA0 100%)',
          boxShadow:
            '-40px 20px 60px rgba(0,0,0,0.13), inset -12px -12px 32px rgba(0,0,0,0.09), inset 12px 12px 28px rgba(255,255,255,0.28)',
          opacity: 0.82,
          pointerEvents: 'none',
          transition: 'transform 0.15s ease',
        }}
      />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '52%' },
            pl: { xs: 3, sm: 5, md: 8 },
            py: { xs: 12, md: 0 },
          }}
        >
          <Typography
            variant="overline"
            className="fade-up"
            sx={{ color: 'text.secondary', display: 'block', mb: 3 }}
          >
            Juwan Han
          </Typography>

          <Typography
            className="fade-up fade-up-d1"
            sx={{
              fontSize: { xs: '3.2rem', sm: '4.8rem', md: '6.5rem' },
              fontWeight: 700,
              letterSpacing: '0.12em',
              lineHeight: 1.05,
              color: 'text.primary',
              textTransform: 'uppercase',
              mb: 4,
            }}
          >
            PORT
            <br />
            FOLIO
          </Typography>

          <Divider
            className="fade-up fade-up-d2"
            sx={{ width: 48, borderColor: 'primary.main', borderWidth: 1.5, mb: 4 }}
          />

          <Typography
            className="fade-up fade-up-d2"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              fontWeight: 300,
              letterSpacing: '0.07em',
              lineHeight: 2,
              color: 'text.secondary',
              mb: 7,
            }}
          >
            설계의 질을 고심하는 퍼블리셔
          </Typography>

          <Box
            component="button"
            className="fade-up fade-up-d3"
            onClick={() => navigate('/profile')}
            sx={{
              background: 'none',
              border: '1px solid #1A1A1A',
              color: 'text.primary',
              px: 4,
              py: 1.5,
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              '&:hover': {
                bgcolor: '#1A1A1A',
                color: '#F8F8F6',
                letterSpacing: '0.28em',
              },
            }}
          >
            Profile
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        className="scroll-bounce fade-up fade-up-d4"
        onClick={() => navigate('/profile')}
        sx={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          color: 'text.secondary',
          cursor: 'pointer',
          zIndex: 1,
          '&:hover': { color: 'text.primary' },
          transition: 'color 0.3s',
        }}
      >
        <Typography variant="overline" sx={{ fontSize: '0.62rem', letterSpacing: '0.22em' }}>
          SCROLL
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: '1.1rem' }} />
      </Box>
    </Box>
  );
}

export default LandingPage;
