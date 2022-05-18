import type { NextPage } from 'next';
import { ColumnList } from '@/components/ColumnList';
import { RoundedBtn } from '@/components/common/RoundedButton/RoundedButton.styled';
import { Container, Header, BoardTitle, ButtonGroup } from './Board.styled';
import { testBoardMock } from '../../mock/data';
import { useState } from 'react';

const Board: NextPage = () => {
  const [boardInfo, setBoardInfo] = useState(testBoardMock);

  return (
    <Container>
      <Header>
        <BoardTitle>{boardInfo.title}</BoardTitle>
        <ButtonGroup>
          <RoundedBtn type="submit" variant="big" typeBtn="addBtn" disabled>
            Create Board
          </RoundedBtn>
          <RoundedBtn type="submit" variant="big" typeBtn="addBtn">
            Add Column
          </RoundedBtn>
          <RoundedBtn type="submit" variant="big" typeBtn="delBtn">
            Delete Board
          </RoundedBtn>
        </ButtonGroup>
      </Header>
      <ColumnList columns={boardInfo.columns} />
    </Container>
  );
};

export default Board;
