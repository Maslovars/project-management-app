import type { NextPage } from 'next';
import { NotFoundWrap, NotFoundContent } from './404.styled';

const NotFound: NextPage = () => {
 return (
  <NotFoundWrap>
    <NotFoundContent />
  </NotFoundWrap>
 );
};

export default NotFound;
