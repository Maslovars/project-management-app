import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from '../Task';
import { RoundedButton } from '@/components/common/RoundedButton';
import { TitleChanger } from './TitleChanger/TitleChanger';
import { ConfirmModal } from '@/components/ConfirmModal';
import { ColumnStyled, Header, Title, TasksContainer } from './Column.styled';
import { TaskTypes } from '@/types/data';
import { useState } from 'react';

interface ColumnProps {
  id: string;
  title: string;
  order: number;
  tasks: TaskTypes[];
  index: number;
}

export const Column: React.FC<ColumnProps> = ({ id, title, tasks, index }) => {
  const [columnTitle, setColumnTitle] = useState(title);
  const [inputShow, setInputShow] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const showTitleChanger = () => {
    setInputShow(true);
  };

  const closeTitleChanger = () => {
    setInputShow(false);
  };

  const titleHandler = (newTitle: string) => {
    setColumnTitle(newTitle);
  };

  const deleteColumn = () => {
    setModalActive(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      alert(`COLUMN: ${title} DELETE`);
    }
    if (!result) {
      return;
    }
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
            />
          )}
          {!inputShow && (
            <Header>
              <Title onClick={showTitleChanger}>{columnTitle}</Title>
              <RoundedButton type="button" typeBtn="addBtn">
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
                  <Task key={item.id} task={item} index={index} />
                ))}
                {provided.placeholder}
              </TasksContainer>
            )}
          </Droppable>
          <div>
            <RoundedButton onClick={deleteColumn} type="button" typeBtn="delBtn">
              Delete column
            </RoundedButton>
          </div>
          <ConfirmModal active={modalActive} setActive={setModalActive} isConfirm={confirmDelete} />
        </ColumnStyled>
      )}
    </Draggable>
  );
};
