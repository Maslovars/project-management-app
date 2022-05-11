import { EntryCard } from '@/components/EntryPage/EntryCard/EntryCard';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { EntryPageWrap } from '@/components/EntryPage/EntryPageWrap/EntryPageWrap';
import type { NextPage } from 'next';
//import { Footer } from

export const SignUp: NextPage = () => {
  return (
    <EntryPageWrap>
      <EntryCard>
        <h2>Sign up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextInput htmlFor='signup-name' name='Name'></TextInput>
          <TextInput htmlFor='signup-email' name='Email' placeholder='name@email.com'></TextInput>
          <TextInput htmlFor='signup-password' name='Password' placeholder='password'></TextInput>
          <RoundedButton type='submit' variant='big' typeBtn='addBtn'>Sugn Up</RoundedButton>
        </form>
        <span>
          Already have an account?
        </span>
      </EntryCard>
    </EntryPageWrap>
  );
};

export default SignUp;
