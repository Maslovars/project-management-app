import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from '@/components/ColumnList/Column';
import { Container, Item } from './ColumnList.styled';
import { ColumnTypes } from '@/types/data';
import { useEffect, useState } from 'react';

interface ColumnListProps {
  columns: ColumnTypes[];
}

export const ColumnList: React.FC<ColumnListProps> = ({ columns }) => {
  const [columnsData, setColumnsData] = useState(columns);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    // console.log('result', result)

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = columnsData.find((column) => column.id === source.droppableId);
    // console.log('column', column)

    // const newTask = column.tasks.splice(source.index, 1)
    const newTask = column.tasks[source.index];
    newTask.columnId = destination.droppableId;
    // console.log('newTask', newTask)
    column.tasks.splice(source.index, 1);
    const newColumn = columnsData.find((column) => column.id === destination.droppableId);

    newColumn.tasks.splice(destination.index, 0, newTask);
    // console.log('newColum', newColumn)

    // console.log("@@@@@", newTaskIds)
    // const newColumn = {
    //   ...column, tasks: newTaskIds
    // }

    // console.log('#####',newColumn)

    // const newState = {
    //   ...columnsData, columns: {
    //     ...columnsData, [newColumn.id]: newColumn,
    //   },
    // }

    // console.log('#####',newState)

    // setColumnsData([...columnsData, newColumn]);
  };

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(process.browser);
  }, []);

  return (
    <>
      {isBrowser ? (
        <DragDropContext onDragEnd={onDragEnd}>
          {' '}
          {
            <Container>
              {columnsData.map((column) => {
                return (
                  <Item key={column.id}>
                    <Column
                      order={column.order}
                      id={column.id}
                      title={column.title}
                      tasks={column.tasks}
                    />
                  </Item>
                );
              })}
            </Container>
          }{' '}
        </DragDropContext>
      ) : null}
    </>
  );
};
