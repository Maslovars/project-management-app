import type { NextPage } from 'next';
import { ColumnList } from '@/components/ColumnList';
import { RoundedBtn } from '@/components/common/RoundedButton/RoundedButton.styled';

import { Container, Header, BoardTitle, ButtonGroup } from './Board.styled';

import { ColumnListMock } from '../../mock/data';

const Board: NextPage = () => {
  return (
    <Container>
      <Header>
        <BoardTitle>Find top 5 customer requests</BoardTitle>
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
      <ColumnList columns={ColumnListMock} />
    </Container>
  );
};

export default Board;
