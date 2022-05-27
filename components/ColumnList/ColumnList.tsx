import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Column } from '@/components/ColumnList/Column';
import { Container, Item } from './ColumnList.styled';
import { ColumnTypes } from '@/types/data';

interface ColumnListProps {
  columns: ColumnTypes[];
}

export const ColumnList: React.FC<ColumnListProps> = ({ columns }) => {
  const [columnsData, setColumnsData] = useState(columns);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'column') {
      const newState = Array.from(columnsData);
      [newState[source.index], newState[destination.index]] = [
        newState[destination.index],
        newState[source.index],
      ];

      newState.forEach((column, index) => {
        column.order = index + 1;
      });

      setColumnsData(newState);
    }

    if (type === 'task') {
      const newState = JSON.parse(JSON.stringify(columnsData));

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

      setColumnsData(newState);
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
                  {columnsData.map((column, index) => {
                    return (
                      <Item key={column.id}>
                        <Column
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
