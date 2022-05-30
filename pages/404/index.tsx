import type { NextPage } from 'next';
import { NotFoundMain, NotFoundContent } from './404.styled.page';

const NotFound: NextPage = () => {
  return (
    <NotFoundMain>
      <NotFoundContent />
    </NotFoundMain>
  );
};

export default NotFound;
