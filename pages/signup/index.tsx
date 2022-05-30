import Link from 'next/link';
import { Formik, Form } from 'formik';
import { RoundedButton } from '@/components/common/RoundedButton';
import { EntryPageWrap } from '@/components/EntryPage/EntryPageWrap/EntryPageWrap';
import * as Yup from 'yup';
import { EntryInput } from '@/components/EntryPage/EntryInput/EntryInput';
import type { NextPage } from 'next';
import { createUser } from 'services/auth/registration/registration';
import {
  ErrorMessage,
  ErrorMessageWrap,
} from '@/components/EntryPage/EntryInput/EntryInput.styled';
import { AuthStateErrors } from 'utils/constants';

export const SignUp: NextPage = () => {
  return (
    <EntryPageWrap>
      <h2>Sign up</h2>
      <Formik
        initialValues={{
          name: '',
          login: '',
          password: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(1, 'Must be 1 characters or more').required('Required'),
          login: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .matches(/(([a-z]+\d+)|(\d+[a-z]+))[a-z\d]*/, 'Must contain number and letter')
            .required('Required'),
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
            createUser(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <EntryInput
            label='Name'
            htmlFor='name'
            name='name'
            type='text'
            placeholder='enter name'
          />
          <EntryInput
            label='Login'
            htmlFor='login'
            name='login'
            type='text'
            placeholder='login123'
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
          <ErrorMessageWrap>
            {AuthStateErrors.errors.length > 0 ? (
              <ErrorMessage className='error'>{[...AuthStateErrors.errors]}</ErrorMessage>
            ) : null}
          </ErrorMessageWrap>
        </Form>
      </Formik>
      <span>
        Already have an account? &nbsp;
        <Link href='/login'>
          <a>Log in</a>
        </Link>
      </span>
    </EntryPageWrap>
  );
};

export default SignUp;
