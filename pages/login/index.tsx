import Link from 'next/link';
import { Formik, Form } from 'formik';
import { RoundedButton } from 'components/common/RoundedButton';
import { EntryPageWrap } from 'components/EntryPage/EntryPageWrap/EntryPageWrap';
import * as Yup from 'yup';
import { EntryInput } from 'components/EntryPage/EntryInput/EntryInput';
import type { NextPage } from 'next';
import { logInUser } from 'services/auth/login/login';
import { AppUserState, AuthStateErrors } from 'utils/constants';
import { ErrorMessage, ErrorMessageWrap } from 'components/EntryPage/EntryInput/EntryInput.styled';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LogIn: NextPage = () => {
  return (
    <EntryPageWrap>
      <h2>Log In</h2>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={Yup.object({
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
            logInUser(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
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
            Log in
          </RoundedButton>
          {AuthStateErrors.errors.length > 0 && (
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          )}
          <ErrorMessageWrap>
            {AuthStateErrors.errors.length > 0 ? (
              <ErrorMessage className='error'>{[...AuthStateErrors.errors]}</ErrorMessage>
            ) : null}
          </ErrorMessageWrap>
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
