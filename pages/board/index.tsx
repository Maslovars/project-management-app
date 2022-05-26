import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ColumnCreator } from '@/components/ColumnCreator/ColumnCreator';
import { ColumnList } from '@/components/ColumnList';
import { RoundedButton } from '@/components/common/RoundedButton';
import { Container, HeaderBoard, BoardTitle, ButtonGroup, BoardLayout } from './Board.styled';
import { testBoardMock } from '../../mock/data';
import { ConfirmModal } from '@/components/ConfirmModal';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const Board = () => {
  const [boardInfo, setBoardInfo] = useState(testBoardMock);
  const [showColumnCreator, setShowColumnCreator] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const router = useRouter();

  const addColumn = () => {
    setShowColumnCreator(true);
  };

  const closeColumnCreator = () => {
    setShowColumnCreator(false);
  };

  const deleteBoard = () => {
    setModalActive(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      alert(`BOARD: ${boardInfo.id} DELETE`);
      router.push('/main');
    }
    if (!result) {
      return;
    }
  };

  const goToMain = () => {
    router.push('/main');
  };

  return (
    <Container>
      <HeaderBoard>
        <BoardTitle>{boardInfo.title}</BoardTitle>
        <ButtonGroup>
          <RoundedButton onClick={addColumn} type="submit" variant="big" typeBtn="addBtn">
            Add Column
          </RoundedButton>
          <RoundedButton onClick={deleteBoard} type="submit" variant="big" typeBtn="delBtn">
            Delete Board
          </RoundedButton>
          <RoundedButton onClick={goToMain} type="button" variant="big" typeBtn="editBtn">
            Go To Main
          </RoundedButton>
        </ButtonGroup>
      </HeaderBoard>
      <ColumnList columns={boardInfo.columns} />
      {showColumnCreator && <ColumnCreator handlerColumn={closeColumnCreator} />}
      <ConfirmModal active={modalActive} setActive={setModalActive} isConfirm={confirmDelete} />
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
