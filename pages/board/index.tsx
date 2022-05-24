import type { NextPage } from 'next';
import { useState } from 'react';
import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { ColumnList } from '@/components/ColumnList';
import { RoundedBtn } from '@/components/common/RoundedButton/RoundedButton.styled';
import { Container, Header, BoardTitle, ButtonGroup } from './Board.styled';
import { testBoardMock } from '../../mock/data';

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
      <PopUp title="Creat Column" children={<TextInput htmlFor="column" name="column" />} />
      <ColumnList columns={boardInfo.columns} />
    </Container>
  );
};

export default Board;
