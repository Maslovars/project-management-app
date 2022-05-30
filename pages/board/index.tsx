import type { NextPage } from 'next';
import { useState } from 'react';
import type { ReactElement } from 'react';
import { ColumnList } from '@/components/ColumnList';
import { RoundedBtn } from '@/components/common/RoundedButton/RoundedButton.styled';
import { Container, HeaderBoard, BoardTitle, ButtonGroup, BoardLayout } from './Board.styled';
import { testBoardMock } from '../../mock/data';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const Board = () => {
  const [boardInfo, setBoardInfo] = useState(testBoardMock);

  return (
    <Container>
      <HeaderBoard>
        <BoardTitle>{boardInfo.title}</BoardTitle>
        <ButtonGroup>
          <RoundedBtn type='submit' variant='big' typeBtn='addBtn' disabled>
            Create Board
          </RoundedBtn>
          <RoundedBtn type='submit' variant='big' typeBtn='addBtn'>
            Add Column
          </RoundedBtn>
          <RoundedBtn type='submit' variant='big' typeBtn='delBtn'>
            Delete Board
          </RoundedBtn>
        </ButtonGroup>
      </HeaderBoard>

      <ColumnList columns={boardInfo.columns} />
    </Container>
  );
};

Board.getLayout = (page: ReactElement) => {
  return (
    <BoardLayout>
      <Header />
      {page}
      <Footer />
    </BoardLayout>
  );
};

export default Board;
