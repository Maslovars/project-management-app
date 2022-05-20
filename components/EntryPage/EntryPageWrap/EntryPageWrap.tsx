import { EntryCard } from '@/components/EntryPage/EntryCard/EntryCard';
import { PageWrap } from './EntryPageWrap.styled';

type Props = {
  children?: React.ReactNode;
};

export const EntryPageWrap: React.FC<Props> = ({ children }) => {
  return (
    <PageWrap>
      <EntryCard>{children}</EntryCard>
    </PageWrap>
  );
};
