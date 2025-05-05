
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SignalCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Signal
        </Typography>
        <Typography variant="h5" component="div">
          Buy BTC/USD
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Stop Loss: $29,000
        </Typography>
        <Typography variant="body2">
          Take Profit: $35,000
        </Typography>
      </CardContent>
    </Card>
  );
}
