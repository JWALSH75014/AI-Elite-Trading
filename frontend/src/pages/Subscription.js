
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Subscription() {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>Subscription Plans</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Monthly - 34.99€</Typography>
            <Button variant="contained" color="primary">Subscribe</Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">6 Months - 24.99€/mo</Typography>
            <Button variant="contained" color="primary">Subscribe</Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">12 Months - 20.74€/mo</Typography>
            <Button variant="contained" color="primary">Subscribe</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
