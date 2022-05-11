import { EntryCard } from '@/components/EntryPage/EntryCard/EntryCard';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { EntryPageWrap } from '@/components/EntryPage/EntryPageWrap/EntryPageWrap';
import type { NextPage } from 'next';
//import { Footer } from

export const LogIn: NextPage = () => {
  return (
    <EntryPageWrap>
      <EntryCard>
        <h2>Log In</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextInput htmlFor='login-email' name='Email' placeholder='name@email.com'></TextInput>
          <TextInput htmlFor='login-password' name='Password' placeholder='password'></TextInput>
          <RoundedButton type='submit' variant='big' typeBtn='addBtn'>Log In</RoundedButton>
        </form>
        <span>
          Don't have an account?
        </span>
      </EntryCard>
    </EntryPageWrap>
  );
};

export default LogIn;
