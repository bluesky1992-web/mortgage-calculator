import { Stack, Typography } from '@mui/material';
import { chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Result({data}) {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;
  return <div>Result</div>;
}
