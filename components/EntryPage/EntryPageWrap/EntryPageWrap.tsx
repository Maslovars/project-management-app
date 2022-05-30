import { EntryCard } from '@/components/EntryPage/EntryCard/EntryCard';
import { PageMain } from './EntryPageWrap.styled';

type Props = {
  children?: React.ReactNode;
};

export const EntryPageWrap: React.FC<Props> = ({ children }) => {
  return (
    <PageMain>
      <EntryCard>{children}</EntryCard>
    </PageMain>
  );
};
