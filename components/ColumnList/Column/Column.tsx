import { Droppable } from 'react-beautiful-dnd';
import { Task } from '../Task';
import { RoundedButton } from '@/components/common/RoundedButton';
import { CardList, Header, Title, TasksContainer } from './Column.styled';
import { TaskTypes } from '@/types/data';

interface ColumnProps {
  id: string;
  title: string;
  order: number;
  tasks: TaskTypes[];
}

export const Column: React.FC<ColumnProps> = ({ id, order, title, tasks }) => {
  return (
    <CardList key={id}>
      <Header>
        <Title>{title}</Title>
        <RoundedButton type="button" typeBtn="addBtn">
          + Add Task
        </RoundedButton>
      </Header>
      <Droppable droppableId={id}>
        {(provided) => (
          <TasksContainer ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((item, index) => (
              <Task key={item.id} task={item} index={index} />
            ))}
            {provided.placeholder}
          </TasksContainer>
        )}
      </Droppable>

      <div>
        <RoundedButton type="submit" typeBtn="delBtn">
          Delete column
        </RoundedButton>
      </div>
    </CardList>
  );
};
