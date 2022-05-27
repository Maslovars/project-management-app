import { BoardPreview } from '@/components/BoardPreview';
import { testBoardsMock } from 'mock/data';
import type { NextPage } from 'next';
import { Container, BoardList } from './Main.styled';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['board'])),
      // Will be passed to the page component as props
    },
  };
}

const Main: NextPage = (props) => {
  return (
    <Container>
      <BoardList>
        {testBoardsMock.map((board) => {
          return (
            <BoardPreview
              key={board.id}
              id={board.id}
              title={board.title}
              columns={board.columns}
            />
          );
        })}
      </BoardList>
    </Container>
  );
};

export default Main;
