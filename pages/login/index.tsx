import Link from 'next/link';
import { Formik, Form } from 'formik';
import { RoundedButton } from '@/components/common/RoundedButton';
import { EntryPageWrap } from '@/components/EntryPage/EntryPageWrap/EntryPageWrap';
import * as Yup from 'yup';
import { EntryInput } from '@/components/EntryPage/EntryInput/EntryInput';
import type { NextPage } from 'next';

export const LogIn: NextPage = () => {
  return (
    <EntryPageWrap>
      <h2>Log In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .matches(
              /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/,
              'Must contain number, capital, lowercase letter'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <EntryInput
            label='Email'
            htmlFor='email'
            name='email'
            type='email'
            placeholder='name@email.com'
          />
          <EntryInput
            label='Password'
            htmlFor='password'
            name='password'
            type='password'
            placeholder='enter password'
          />
          <RoundedButton type='submit' variant='big' typeBtn='addBtn'>
            Sugn Up
          </RoundedButton>
        </Form>
      </Formik>
      <span>
        Already have an account? &nbsp;
        <Link href='/signup'>
          <a>Sign Up</a>
        </Link>
      </span>
    </EntryPageWrap>
  );
};

export default LogIn;
