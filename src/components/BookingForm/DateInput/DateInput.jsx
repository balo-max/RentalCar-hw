import css from './DateInput.module.css';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ field, form }) => (
  <DatePicker
    {...field}
    selected={field.value}
    onChange={date => form.setFieldValue(field.name, date)}
    placeholderText="Booking date"
    minDate={new Date(new Date().setHours(0, 0, 0, 0))}
    className={css.dateInput}
  />
);

export default DateInput;
