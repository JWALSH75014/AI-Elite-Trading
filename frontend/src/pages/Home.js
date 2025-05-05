
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to AI Elite Trading
        </Typography>
      </Container>
    </div>
  );
}
