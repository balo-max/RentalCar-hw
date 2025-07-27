import css from './BookingForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import DateInput from './DateInput/DateInput';

const today = new Date();
today.setHours(0, 0, 0, 0);

const bookingSchema = Yup.object({
  name: Yup.string().min(2).max(32).required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  bookingDate: Yup.date()
    .min(today, 'You cannot select a past date')
    .required('Required'),
  comment: Yup.string().min(2).max(200),
});

const BookingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    const payload = {
      name: values.name,
      email: values.email,
      bookingDate: values.bookingDate,
      comment: values.comment,
    };

    console.log('Dispatch:', payload);

    toast.success('Car successfully booked!', {
      duration: 2000,
    });

    resetForm();
  };

  return (
    <div className={css.carFormWrapper}>
      <h3 className={css.formTitle}>Book your car now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        validationSchema={bookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formWrapper}>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />

          <Field
            className={css.formInput}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />

          <Field
            className={css.formInput}
            type="date"
            name="bookingDate"
            component={DateInput}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="bookingDate"
            component="span"
          />

          <Field
            className={css.formComment}
            type="text"
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="comment"
            component="span"
          />

          <button type="submit" className={css.formBtnSend}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
