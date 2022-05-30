import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Column } from '@/components/ColumnList/Column';
import { Container, Item } from './ColumnList.styled';
import { ColumnTypes } from '@/types/data';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { changeColumnOrder, dndDeleteTask } from '../../store/actionCreators/boardActionCreator';
import { setColumnData } from '../../store/reducers/boardSlice';

interface ColumnListProps {
  columns: ColumnTypes[];
  boardId: string;
}

export const ColumnList: React.FC<ColumnListProps> = ({ columns, boardId }) => {
  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    const { destination, source, type, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'column') {
      const newState = JSON.parse(JSON.stringify(columns));
      newState.splice(destination.index, 0, newState.splice(source.index, 1)[0]);

      dispatch(setColumnData(newState));

      const title = columns.find((column) => column.id === result.draggableId).title;

      dispatch(
        changeColumnOrder({
          boardId,
          columnId: result.draggableId,
          title,
          columnOrder: destination.index + 1,
        })
      );
    }

    if (type === 'task') {
      const newState = JSON.parse(JSON.stringify(columns));
      const column = newState.find((column: ColumnTypes) => column.id === source.droppableId);
      const newTask = column.tasks[source.index];
      newTask.columnId = destination.droppableId;
      column.tasks.splice(source.index, 1);
      const newColumn = newState.find(
        (column: ColumnTypes) => column.id === destination.droppableId
      );
      newColumn.tasks.splice(destination.index, 0, newTask);
      newState.forEach((column: ColumnTypes) => {
        column.tasks.forEach((task, index) => {
          task.order = index + 1;
        });
      });
      dispatch(setColumnData(newState));

      // const title = columns.find((column) => column.id === result.draggableId).title;
      const currentColumn = columns.find((column) => column.id === result.source.droppableId);
      const currentColumnId = columns.find((column) => column.id === result.source.droppableId).id;
      const currentColumnTaskId = draggableId;

      const taskToColumn = currentColumn.tasks.find((task) => task.id === draggableId);

      dispatch(
        dndDeleteTask({
          boardId,
          columnId: currentColumnId,
          id: draggableId,
          addParams: {
            boardId,
            title: taskToColumn.title,
            description: taskToColumn.description,
            assigned: taskToColumn.userId,
            currentColumnId: destination.droppableId,
            order: destination.index + 1,
            id: taskToColumn.id,
          },
        })
      );
    }
  };

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(process.browser);
  }, []);

  return (
    <>
      {isBrowser ? (
        <DragDropContext onDragEnd={onDragEnd}>
          {
            <Droppable droppableId='all-columns' direction='horizontal' type='column'>
              {(provided) => (
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                  {columns?.map((column, index) => {
                    return (
                      <Item key={column.id}>
                        <Column
                          boardId={boardId}
                          order={column.order}
                          id={column.id}
                          title={column.title}
                          tasks={column.tasks}
                          index={index}
                        />
                      </Item>
                    );
                  })}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          }
        </DragDropContext>
      ) : null}
    </>
  );
};
