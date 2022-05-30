import { Main } from './Layout.styled';

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};
