import { BoardPreview } from '@/components/BoardPreview';
import { UserBoardsMock } from 'mock/data';
import type { NextPage } from 'next';
import { Container, BoardList } from './Main.styled';

const Main: NextPage = () => {
  return (
    <Container>
      <BoardList>
        {UserBoardsMock.map((board) => {
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
