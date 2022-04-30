import { TextField } from '@mui/material';

const Input = ({label, value, onChange}: {label: string, value: string | number, onChange: any}) => {  

  return (
    <TextField
      required
      id='outlined-basic'
      type='number'
      variant='outlined'
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;