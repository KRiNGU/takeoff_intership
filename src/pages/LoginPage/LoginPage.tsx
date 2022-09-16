import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const LoginPage = () => (
  <Container
    maxWidth={false}
    disableGutters
    sx={{
      backgroundColor: '#193F48',
      overflow: 'hidden',
      minHeight: '100%',
      position: 'relative',
    }}
  >
    <Paper
      sx={{
        width: '500px',
        height: '500px',
        backgroundColor: '#112433',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  </Container>
);

export default LoginPage;
