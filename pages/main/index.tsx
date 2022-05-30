import { BoardPreview } from '@/components/BoardPreview';
import type { NextPage } from 'next';
import { AddNewBoardBtn, Container, BoardList, Title } from './Main.styled';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useEffect, useState } from 'react';
import { fetchBoards } from 'store/actionCreators/mainActionCreator';
import { Loader } from '@/components/Loader';
import { BoardCreator } from '@/components/BoardCreator/BoardCreator';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['board'])),
      // Will be passed to the page component as props
    },
  };
}

const Main: NextPage = (props) => {
  const { boards, isLoading, error } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();
  const [showBoardCreator, setShowBoardCreator] = useState(false);

  const addBoard = () => {
    setShowBoardCreator(true);
  };

  const closeBoardCreator = () => {
    setShowBoardCreator(false);
  };

  useEffect(() => {
    dispatch(fetchBoards());
    // const token = JSON.parse(localStorage.getItem('user'));
    // console.log('token', token.user.token)
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}
      <BoardList>
        <AddNewBoardBtn onClick={addBoard}>
          <Title>+</Title>
          <Title>Create new board</Title>
        </AddNewBoardBtn>
        {boards.map((board) => {
          return (
            <BoardPreview
              key={board.id}
              id={board.id}
              title={board.title}
              description={board.description}
            />
          );
        })}
      </BoardList>
      {showBoardCreator && <BoardCreator closeBoardCreator={closeBoardCreator} />}
    </Container>
  );
};

export default Main;
