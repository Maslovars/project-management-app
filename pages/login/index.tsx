import Link from 'next/link';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { EntryPageWrap } from '@/components/EntryPage/EntryPageWrap/EntryPageWrap';
import type { NextPage } from 'next';

export const LogIn: NextPage = () => {
  return (
    <EntryPageWrap>
      <h2>Log In</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextInput
          htmlFor="login-email"
          name="Email"
          type="email"
          placeholder="name@email.com"
        ></TextInput>
        <TextInput
          htmlFor="login-password"
          name="Password"
          type="password"
          placeholder="password"
        ></TextInput>
        <RoundedButton type="submit" variant="big" typeBtn="addBtn">
          Log In
        </RoundedButton>
      </form>
      <span>
        Don't have an account? &nbsp;
        <Link href="/signup">
          <a className="link-form">Sign up</a>
        </Link>
      </span>
    </EntryPageWrap>
  );
};

export default LogIn;
