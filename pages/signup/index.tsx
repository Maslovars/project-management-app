import Link from 'next/link';
import { TextInput } from '@/components/common/TextInput';
import { Formik, Form, useField, useFormikContext } from 'formik';
import { RoundedButton } from '@/components/common/RoundedButton';
import { EntryPageWrap } from '@/components/EntryPage/EntryPageWrap/EntryPageWrap';
import { EnterInput } from '@/components/EntryPage/EntryInput/EntryInput';
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
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <EnterInput htmlFor="signup-name" name="Name" />
          <EnterInput
            htmlFor="signup-email"
            name="Email"
            type="email"
            placeholder="name@email.com"
          />
          <EnterInput
            htmlFor="signup-password"
            name="Password"
            type="password"
            placeholder="password"
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
