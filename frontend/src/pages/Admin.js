
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Admin() {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
        <Button variant="outlined">Manage Users</Button>
        <Button variant="outlined">Manage Signals</Button>
        <Button variant="outlined">Manage Blog Posts</Button>
      </Container>
    </div>
  );
}
