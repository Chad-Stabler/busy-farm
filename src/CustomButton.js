import { Button } from '@mui/material';


export default function CustomButton({ disabled, onClick, children, color = '#354d7b', border = '1px solid goldenrod', margin = '10px', variant = 'contained' }) {
  return (<Button disabled={disabled} variant={variant} onClick={onClick} sx={{
    background: color,
    border: border,
    margin: margin
  }}>
    {children}
  </Button>);
}