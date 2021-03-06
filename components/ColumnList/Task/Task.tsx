import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { TaskTypes } from '@/types/data';

import { RoundedButton } from '@/components/common/RoundedButton';
import { ConfirmModal } from '@/components/ConfirmModal';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { deleteTask } from 'store/actionCreators/boardActionCreator';

import { FileList } from './FileList/FileList';
import {
  Card,
  Header,
  Title,
  Description,
  Assigned,
  Avatar,
  Name,
  ButtonGroup,
} from './Task.styled';
import { showTaskChanger } from 'store/reducers/boardSlice';

interface TaskProps {
  index: number;
  task: TaskTypes;
  columnId: string;
  boardId: string;
}

export const Task: React.FC<TaskProps> = ({ task, index, columnId, boardId }) => {
  const { id, title, description, userId, files, order } = task;
  const [modalConfirmActive, setModalConfirmActive] = useState(false);

  const dispatch = useAppDispatch();

  const { users } = useAppSelector((state) => state.boardReducer);

  const deleteTaskId = () => {
    setModalConfirmActive(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      dispatch(deleteTask({ boardId, columnId, id }));
    }
    if (!result) {
      return;
    }
  };

  const editTask = () => {
    dispatch(showTaskChanger({ columnId, title, order, description, userId, boardId, id }));
  };

  const getUserName = (userId: string): string => {
    const user = users.find((user) => user.id === userId);
    return user?.name;
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Header>
            <Title>{title}</Title>
          </Header>
          <Assigned>
            <Avatar src='../img/user-avatar.png' alt={userId} />
            <Name>{getUserName(userId) || 'User not found'}</Name>
          </Assigned>
          <Description>{description}</Description>
          {/* <FileList files={files} /> */}
          <ButtonGroup>
            <RoundedButton onClick={editTask} type='button' typeBtn='editBtn' variant='small'>
              Edit
            </RoundedButton>
            <RoundedButton onClick={deleteTaskId} type='button' typeBtn='delBtn' variant='small'>
              Delete
            </RoundedButton>
          </ButtonGroup>
          <ConfirmModal
            active={modalConfirmActive}
            setActive={setModalConfirmActive}
            isConfirm={confirmDelete}
          />
        </Card>
      )}
    </Draggable>
  );
};
