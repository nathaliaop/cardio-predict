import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectionBox = ({value, onChange, label, rows}: {value: string, onChange: any, label: string, rows : any}) => {  

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