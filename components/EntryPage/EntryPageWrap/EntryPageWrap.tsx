import { EntryCard } from '@/components/EntryPage/EntryCard/EntryCard';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { PageWrap, ContentWrap } from './EntryPageWrap.styled';
import type { NextPage } from 'next';
//import { Footer } from

type Props = {
  children?: React.ReactNode,
};

export const EntryPageWrap: React.FC<Props> = ({children}) => {
  return (
    <PageWrap>
      <ContentWrap>
        {children}
      </ContentWrap>
    </PageWrap>
  );
};