import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from '../Task';
import { RoundedButton } from '@/components/common/RoundedButton';
import { TitleChanger } from './TitleChanger/TitleChanger';
import { ConfirmModal } from '@/components/ConfirmModal';
import { TaskCreator } from './TaskCreator/TaskCreator';
import { ColumnStyled, Header, Title, TasksContainer } from './Column.styled';
import { TaskTypes } from '@/types/data';
import { useState } from 'react';
import axios from 'axios';
import { deleteColumn } from 'store/actionCreators/boardActionCreator';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';

interface ColumnProps {
  id: string;
  title: string;
  order: number;
  tasks: TaskTypes[];
  index: number;
  boardId: string;
}

export const Column: React.FC<ColumnProps> = ({ id, title, tasks, index, boardId, order }) => {
  const dispatch = useAppDispatch();
  const [columnTitle, setColumnTitle] = useState(title);
  const [inputShow, setInputShow] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [showTaskCreator, setShowTaskCreator] = useState(false);

  const showTitleChanger = () => {
    setInputShow(true);
  };

  const closeTitleChanger = () => {
    setInputShow(false);
  };

  const titleHandler = (newTitle: string) => {
    setColumnTitle(newTitle);
  };

  const deleteColumnId = () => {
    setModalActive(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      dispatch(deleteColumn({ boardId, id }));
    }
    if (!result) {
      return;
    }
  };

  const addTask = () => {
    setShowTaskCreator(true);
  };

  const closeTaskCreator = () => {
    setShowTaskCreator(false);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <ColumnStyled
          key={id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {inputShow && (
            <TitleChanger
              closeTitleChanger={closeTitleChanger}
              currentTitle={columnTitle}
              titleHandler={titleHandler}
              columnOrder={order}
              boardId={boardId}
              columnId={id}
              testIndex={index}
            />
          )}
          {!inputShow && (
            <Header>
              <Title onClick={showTitleChanger}>{columnTitle}</Title>
              <RoundedButton onClick={addTask} type="button" typeBtn="addBtn">
                + Add Task
              </RoundedButton>
            </Header>
          )}

          <Droppable droppableId={id} type="task">
            {(provided, snapshot) => (
              <TasksContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((item, index) => (
                  <Task key={item.id} task={item} index={index} columnId={id} boardId={boardId} />
                ))}
                {provided.placeholder}
              </TasksContainer>
            )}
          </Droppable>
          <div>
            <RoundedButton onClick={deleteColumnId} type="button" typeBtn="delBtn">
              Delete column
            </RoundedButton>
          </div>
          {showTaskCreator && (
            <TaskCreator boardId={boardId} columnId={id} closer={closeTaskCreator} />
          )}
          <ConfirmModal active={modalActive} setActive={setModalActive} isConfirm={confirmDelete} />
        </ColumnStyled>
      )}
    </Draggable>
  );
};
