import { Box, Container, Typography, Button, Chip, Avatar } from '@mui/material';

const projects = [
  { label: '프로젝트 1', href: '#' },
  { label: '프로젝트 2', href: '#' },
  { label: '프로젝트 3', href: '#' },
];

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1976d2, #dc004e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: '#ffffff',
            borderRadius: { xs: 2, sm: 4 },
            p: { xs: 3, sm: 5, md: 6 },
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <Avatar
            sx={{
              width: { xs: 60, sm: 80 },
              height: { xs: 60, sm: 80 },
              bgcolor: 'primary.main',
              fontSize: { xs: '1.5rem', sm: '2rem' },
              mx: 'auto',
              mb: { xs: 2, sm: 3 },
            }}
          >
            🚀
          </Avatar>

          <Typography
            variant="h1"
            color="primary"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.875rem', md: '2.125rem' },
              mb: 1,
            }}
          >
            안녕하세요!
          </Typography>

          <Typography variant="body1" sx={{ mb: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            AI Vibe Coding을 공부하고 있는
            <br />
            <strong>Juwan Han</strong>입니다.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            React · MUI · Vite로
            <br />
            멋진 웹을 만들어가고 있어요.
          </Typography>

          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            {['React', 'MUI', 'Vite', 'GitHub Pages'].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{ m: 0.5 }}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 1.5 } }}>
            {projects.map(({ label, href }) => (
              <Button
                key={label}
                variant="outlined"
                color="primary"
                href={href}
                fullWidth
                size="large"
              >
                {label}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            href="https://github.com/juwan0221"
            size="large"
            sx={{ mt: { xs: 2, sm: 3 }, px: { xs: 3, sm: 4 } }}
          >
            GitHub 방문하기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
