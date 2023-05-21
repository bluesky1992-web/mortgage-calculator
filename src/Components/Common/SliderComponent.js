import React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
export default function SliderComponent({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps,
}) {
  return (
    <Stack my={1.4}>
         <Typography variant='subtitle2' >{label}</Typography>
         <Typography variant='h5'>
            {unit} {amount} 

         </Typography>
    </Stack>
  )
}
