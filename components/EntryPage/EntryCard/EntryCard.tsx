import { EntryCardWrap, Svg } from './EntryCard.styled';

type Props = {
  children?: React.ReactNode;
};

export const EntryCard: React.FC<Props> = ({ children }) => {
  return (
    <EntryCardWrap>
      <Svg />
      {children}
    </EntryCardWrap>
  );
};
