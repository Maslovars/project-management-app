import type { NextPage } from 'next';
import { ColumnList } from '@/components/ColumnList';

import { ColumnListMock } from '../mock/data';

const Home: NextPage = () => {
  return <ColumnList columns={ColumnListMock} />;
};

export default Home;
