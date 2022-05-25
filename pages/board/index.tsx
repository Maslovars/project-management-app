import type { NextPage } from 'next';
import { useState } from 'react';
import { ColumnCreator } from '@/components/ColumnCreator/ColumnCreator';
import { ColumnList } from '@/components/ColumnList';
import { RoundedBtn } from '@/components/common/RoundedButton/RoundedButton.styled';
import { Container, Header, BoardTitle, ButtonGroup } from './Board.styled';
import { testBoardMock } from '../../mock/data';

const Board: NextPage = () => {
  const [boardInfo, setBoardInfo] = useState(testBoardMock);
  const [showColumnCreator, setShowColumnCreator] = useState(false);

  const addColumn = () => {
    setShowColumnCreator(true);
  };

  const closeColumnCreator = () => {
    setShowColumnCreator(false);
  };

  return (
    <Container>
      <Header>
        <BoardTitle>{boardInfo.title}</BoardTitle>
        <ButtonGroup>
          <RoundedBtn type="submit" variant="big" typeBtn="addBtn" disabled>
            Create Board
          </RoundedBtn>
          <RoundedBtn onClick={addColumn} type="submit" variant="big" typeBtn="addBtn">
            Add Column
          </RoundedBtn>
          <RoundedBtn type="submit" variant="big" typeBtn="delBtn">
            Delete Board
          </RoundedBtn>
        </ButtonGroup>
      </Header>
      <ColumnList columns={boardInfo.columns} />
      {showColumnCreator && <ColumnCreator handlerColumn={closeColumnCreator} />}
    </Container>
  );
};

export default Board;
