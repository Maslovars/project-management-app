import { EntryCard } from '@/components/EntryPage/EntryCard/EntryCard';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { PageWrap, ContentWrap } from './EntryPageWrap.styled';
import { Footer } from '@/components/Footer';

type Props = {
  children?: React.ReactNode,
};

export const EntryPageWrap: React.FC<Props> = ({children}) => {
  return (
    <PageWrap>
      <ContentWrap>
        <EntryCard>
          {children}
        </EntryCard>
      </ContentWrap>
      <Footer />
    </PageWrap>
  );
};