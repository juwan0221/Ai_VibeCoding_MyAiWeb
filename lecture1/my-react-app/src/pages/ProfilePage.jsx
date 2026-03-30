import { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const sections = [
  {
    label: 'ABOUT',
    lines: [
      'UI/UX와 설계의 본질을 탐구하는 퍼블리셔입니다.',
      '디테일과 여백 사이에서 완성도를 찾습니다.',
    ],
  },
  {
    label: 'AWARDS',
    lines: [
      '2024  웹디자인 공모전 우수상',
      '2023  UI 설계 챌린지 최우수상',
    ],
  },
  {
    label: 'EXPERIENCE',
    lines: [
      '2024 – 현재    프리랜서 퍼블리셔',
      '2022 – 2024  웹 에이전시 UI 개발',
    ],
  },
];

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s,
                     transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}

function ProfilePage() {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 14 },
            py: { xs: 9, md: 14 },
            px: { xs: 3, sm: 5, md: 8 },
            alignItems: 'flex-start',
          }}
        >
          {/* Left: Profile Image */}
          <FadeSection delay={0}>
            <Box sx={{ flexShrink: 0 }}>
              <Box
                sx={{
                  width: { xs: 110, md: 190 },
                  height: { xs: 110, md: 190 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '-20px 12px 44px rgba(0,0,0,0.11)',
                  bgcolor: '#E4E4E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {!imgError ? (
                  <Box
                    component="img"
                    src="/profile.jpg"
                    alt="profile"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <Typography
                    variant="overline"
                    sx={{ color: '#ADADAD', fontSize: '0.65rem', letterSpacing: '0.18em' }}
                  >
                    PHOTO
                  </Typography>
                )}
              </Box>
            </Box>
          </FadeSection>

          {/* Right: Text */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <FadeSection delay={0.1}>
              <Typography
                variant="overline"
                sx={{ color: 'text.secondary', display: 'block', mb: 1 }}
              >
                Profile
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  lineHeight: 1.2,
                  color: 'text.primary',
                  mb: 0.5,
                }}
              >
                Juwan Han
              </Typography>

              <Divider sx={{ width: 36, borderColor: 'primary.main', borderWidth: 1.5, mb: 6, mt: 2 }} />
            </FadeSection>

            {sections.map(({ label, lines }, i) => (
              <FadeSection key={label} delay={0.2 + i * 0.15}>
                <Box sx={{ mb: 5 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'primary.main',
                      display: 'block',
                      mb: 1.5,
                    }}
                  >
                    {label}
                  </Typography>
                  {lines.map((line, j) => (
                    <Typography
                      key={j}
                      variant="body1"
                      sx={{
                        color: j === 0 ? 'text.primary' : 'text.secondary',
                        fontWeight: j === 0 ? 400 : 300,
                        lineHeight: 2.1,
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>
              </FadeSection>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Back to Landing */}
      <Box
        onClick={() => navigate('/')}
        sx={{
          position: 'fixed',
          bottom: 36,
          right: 36,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.4,
          color: 'text.secondary',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'color 0.3s',
          '&:hover': { color: 'text.primary' },
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: '1.1rem' }} />
        <Typography variant="overline" sx={{ fontSize: '0.62rem', letterSpacing: '0.22em' }}>
          BACK
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfilePage;
