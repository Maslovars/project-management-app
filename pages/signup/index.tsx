import Link from 'next/link';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { EntryPageWrap } from '@/components/EntryPage/EntryPageWrap/EntryPageWrap';
import type { NextPage } from 'next';

export const SignUp: NextPage = () => {
  return (
    <EntryPageWrap>
      <h2>Sign up</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextInput htmlFor="signup-name" name="Name"></TextInput>
        <TextInput
          htmlFor="signup-email"
          name="Email"
          type="email"
          placeholder="name@email.com"
        ></TextInput>
        <TextInput
          htmlFor="signup-password"
          name="Password"
          type="password"
          placeholder="password"
        ></TextInput>
        <RoundedButton type="submit" variant="big" typeBtn="addBtn">
          Sugn Up
        </RoundedButton>
      </form>
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
