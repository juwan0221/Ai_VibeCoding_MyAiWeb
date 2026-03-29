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
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: '#ffffff',
            borderRadius: 4,
            p: 6,
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: 'primary.main',
              fontSize: '2rem',
              mx: 'auto',
              mb: 3,
            }}
          >
            🚀
          </Avatar>

          <Typography variant="h1" color="primary" sx={{ mb: 1 }}>
            안녕하세요!
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            AI Vibe Coding을 공부하고 있는
            <br />
            <strong>Juwan Han</strong>입니다.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            React · MUI · Vite로
            <br />
            멋진 웹을 만들어가고 있어요.
          </Typography>

          <Box sx={{ mb: 4 }}>
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

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {projects.map(({ label, href }) => (
              <Button
                key={label}
                variant="outlined"
                color="primary"
                href={href}
                fullWidth
              >
                {label}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            href="https://github.com/juwan0221"
            sx={{ mt: 3 }}
          >
            GitHub 방문하기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
