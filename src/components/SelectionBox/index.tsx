import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectionBox = ({label, value, onChange, rows}: {label: string, value: string, onChange: any, rows : any}) => {  

  return (
    <FormControl sx={{ minWidth: 225 }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Gender"
        value={value}
        onChange={() => onChange(value)}
      >
        {rows.map((row: any) => (
          <MenuItem value={row.value}>{row.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectionBox;