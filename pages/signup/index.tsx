import Link from 'next/link';
import { Formik, Form, useField, useFormikContext, FormikHelpers, ErrorMessage } from 'formik';
import { RoundedButton } from '@/components/common/RoundedButton';
import { EntryPageWrap } from '@/components/EntryPage/EntryPageWrap/EntryPageWrap';
import * as Yup from 'yup';
import { EntryInput } from '@/components/EntryPage/EntryInput/EntryInput';
import type { NextPage } from 'next';

export const SignUp: NextPage = () => {
  return (
    <EntryPageWrap>
      <h2>Sign up</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(1, 'Must be 1 characters or more').required('Required'),
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
            label="Name"
            htmlFor="name"
            name="name"
            type="text"
            placeholder="enter name"
          />
          <EntryInput
            label="Email"
            htmlFor="email"
            name="email"
            type="email"
            placeholder="name@email.com"
          />
          <EntryInput
            label="Password"
            htmlFor="password"
            name="password"
            type="password"
            placeholder="enter password"
          />
          <RoundedButton type="submit" variant="big" typeBtn="addBtn">
            Sugn Up
          </RoundedButton>
        </Form>
      </Formik>
      <span>
        Already have an account? &nbsp;
        <Link href="/login">
          <a>Log in</a>
        </Link>
      </span>
    </EntryPageWrap>
  );
};

export default SignUp;
