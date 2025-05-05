
import Navbar from '../components/Navbar';
import SignalCard from '../components/SignalCard';
import Container from '@mui/material/Container';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1>Dashboard</h1>
        <SignalCard />
      </Container>
    </div>
  );
}
