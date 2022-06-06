import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { wrapper } from 'store/store';
import { setBoardData, showColumnCreator } from 'store/reducers/boardSlice';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import { baseUrl, fetchUsers, mockUserToken } from 'store/actionCreators/boardActionCreator';
import { deleteBoard } from 'store/actionCreators/mainActionCreator';

import { ColumnCreator } from '@/components/ColumnCreator/ColumnCreator';
import { TaskCreator } from '@/components/ColumnList/Task/TaskCreator/TaskCreator';
import { ColumnList } from '@/components/ColumnList';
import { RoundedButton } from '@/components/common/RoundedButton';
import { ConfirmModal } from '@/components/ConfirmModal';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Loader } from '@/components/Loader';
import { TaskChanger } from '@/components/ColumnList/Column/TaskChanger/TaskChanger';

import { ColumnTypes } from '@/types/data';

import {
  Container,
  HeaderBoard,
  BoardTitle,
  ButtonGroup,
  BoardLayout,
} from '../../pages-styles/Board.styled';

const Board = () => {
  const {
    data: { id, title, columns },
    isLoading,
    isColumnCreator,
    isTaskCreator,
    isTaskChanger,
    error,
  } = useAppSelector((state) => state.boardReducer);

  const [modalActive, setModalActive] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const addColumn = () => {
    dispatch(showColumnCreator());
  };

  const deleteCurrentBoard = () => {
    setModalActive(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      dispatch(deleteBoard(id));
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
              position='top-right'
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
            <RoundedButton onClick={addColumn} type='button' variant='big' typeBtn='addBtn'>
              Add Column
            </RoundedButton>
            <RoundedButton
              onClick={deleteCurrentBoard}
              type='button'
              variant='big'
              typeBtn='delBtn'
            >
              Delete Board
            </RoundedButton>
            <RoundedButton onClick={goToMain} type='button' variant='big' typeBtn='editBtn'>
              Go To Main
            </RoundedButton>
          </ButtonGroup>
        </HeaderBoard>
        <ColumnList boardId={id} columns={columns} />
        {isColumnCreator && <ColumnCreator boardId={id} />}
        {isTaskCreator && <TaskCreator boardId={id} />}
        {isTaskChanger && <TaskChanger boardId={id} />}
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
  const {
    query: { id },
  } = context;

  const response = await axios.get(`${baseUrl}/boards/${id}`, {
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

  const newState = JSON.parse(JSON.stringify(data));
  newState.columns.sort(function (a: ColumnTypes, b: ColumnTypes) {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  });

  newState.columns.map((column: ColumnTypes) => {
    column.tasks.sort(function (a, b) {
      if (a.order > b.order) {
        return 1;
      }
      if (a.order < b.order) {
        return -1;
      }
      return 0;
    });
  });

  store.dispatch(setBoardData(newState));
  return {
    props: {
      board: data,
    },
  };
});

export default Board;
