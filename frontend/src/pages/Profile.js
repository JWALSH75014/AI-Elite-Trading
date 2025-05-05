
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Profile() {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>User Profile</Typography>
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Preferred Strategy" margin="normal" />
        <Button variant="contained" color="primary">Update Profile</Button>
      </Container>
    </div>
  );
}
