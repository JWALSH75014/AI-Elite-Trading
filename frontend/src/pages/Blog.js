
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Blog() {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>Trading Blog</Typography>
        <List>
          <ListItem>How to interpret AI Signals</ListItem>
          <ListItem>What are Options and how to use them?</ListItem>
        </List>
      </Container>
    </div>
  );
}
