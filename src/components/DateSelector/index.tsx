import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const DateSelector = ({value, onChange, newDate} : {value: any, onChange: any, newDate: any}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          clearable
          value={value}
          onChange={onChange}
          maxDate={newDate}
          format='dd/MM/yyyy'
        />

      </MuiPickersUtilsProvider>
  );
}

export default DateSelector;