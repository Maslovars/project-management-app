import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { wrapper } from 'store/store';
import { setBoardData, showColumnCreator } from 'store/reducers/boardSlice';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import {
  baseUrl,
  mockBoardId,
  mockUserToken,
  fetchBoardData,
} from 'store/actionCreators/boardActionCreator';

import { ColumnCreator } from '@/components/ColumnCreator/ColumnCreator';
import { ColumnList } from '@/components/ColumnList';
import { RoundedButton } from '@/components/common/RoundedButton';
import { ConfirmModal } from '@/components/ConfirmModal';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Loader } from '@/components/Loader';

import { Container, HeaderBoard, BoardTitle, ButtonGroup, BoardLayout } from './Board.styled';

const Board = () => {
  const {
    data: { id, title, columns },
    isLoading,
    isColumnCreator,
    error,
  } = useAppSelector((state) => state.boardReducer);

  const [modalActive, setModalActive] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const addColumn = () => {
    dispatch(showColumnCreator());
  };

  const deleteBoard = () => {
    setModalActive(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      alert(`BOARD DELETE`);
      router.push('/main');
    }
    if (!result) {
      return;
    }
  };

  const goToMain = () => {
    router.push('/main');
  };

  toast.error(error);

  return (
    <>
      <Container>
        <HeaderBoard>
          <BoardTitle>{title}</BoardTitle>
          {isLoading && <Loader />}
          {error && (
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          )}
          <ButtonGroup>
            <RoundedButton onClick={addColumn} type="button" variant="big" typeBtn="addBtn">
              Add Column
            </RoundedButton>
            <RoundedButton onClick={deleteBoard} type="button" variant="big" typeBtn="delBtn">
              Delete Board
            </RoundedButton>
            <RoundedButton onClick={goToMain} type="button" variant="big" typeBtn="editBtn">
              Go To Main
            </RoundedButton>
          </ButtonGroup>
        </HeaderBoard>
        <ColumnList boardId={id} columns={columns} />
        {isColumnCreator && <ColumnCreator boardId={id} />}
        <ConfirmModal active={modalActive} setActive={setModalActive} isConfirm={confirmDelete} />
      </Container>
    </>
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  // const {id} = context // this id should be added to request on next line!
  const response = await axios.get(`${baseUrl}/boards/${mockBoardId}`, {
    headers: {
      Authorization: `Bearer ${mockUserToken}`,
    },
  });

  const data = await response.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  store.dispatch(setBoardData(data));
  return {
    props: {
      board: data,
    },
  };
});

export default Board;
