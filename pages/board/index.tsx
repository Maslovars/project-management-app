import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ColumnCreator } from '@/components/ColumnCreator/ColumnCreator';
import { ColumnList } from '@/components/ColumnList';
import { RoundedButton } from '@/components/common/RoundedButton';
import { Container, HeaderBoard, BoardTitle, ButtonGroup, BoardLayout } from './Board.styled';
import { testBoardMock } from '../../mock/data';
import { useSelector } from 'react-redux';
import { ConfirmModal } from '@/components/ConfirmModal';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import axios from 'axios';

export const getServerSideProps = async (context) => {
  const {id} = context // this id should be added to request on next line!
  const response = await axios.get(`https://kanban-rest77.herokuapp.com/boards/da90f759-014e-40fc-96d1-0970631acb80`, {
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTM2NzJhOS1jY2JkLTRjMmEtOGI1Yy0zYjAzNDQyNzQ4YzUiLCJsb2dpbiI6InRlc3QxMjMiLCJpYXQiOjE2NTM2MzMyNjJ9.melw7nOQCOT9rcO6Kz6JaKWmLFh8Tgq4GxBTF5R1Ty4'}

    })
    const data = await response.data

    if (!data) {
return {
  notFound: true
}
    }

  return {
    props: {board: data}, 
  }
}

const Board = ({board}) => {
  const state = useSelector(store => store)
  console.log(state)
  const [boardInfo, setBoardInfo] = useState(board);
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

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await axios.get('https://kanban-rest77.herokuapp.com/boards', {
//       headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTM2NzJhOS1jY2JkLTRjMmEtOGI1Yy0zYjAzNDQyNzQ4YzUiLCJsb2dpbiI6InRlc3QxMjMiLCJpYXQiOjE2NTM2MzMyNjJ9.melw7nOQCOT9rcO6Kz6JaKWmLFh8Tgq4GxBTF5R1Ty4'}

//        })
//     .then((response) => {
//       console.log(response);
//     }, (error) => {
//       console.log(error);
//     });
//   }
//   fetchData()
// },[])

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
