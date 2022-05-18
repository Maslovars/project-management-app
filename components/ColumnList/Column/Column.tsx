import { Task } from './Task';
import { RoundedButton } from '@/components/common/RoundedButton';
import { CardList, Header, Title, TasksContainer } from './Column.styled';
import { TaskTypes } from '@/types/data';

interface ColumnProps {
  id: number;
  title: string;
  tasks: TaskTypes[];
}

export const Column: React.FC<ColumnProps> = ({ id, title, tasks }) => {
  return (
    <CardList key={id}>
      <Header>
        <Title>{title}</Title>
        <RoundedButton type="button" typeBtn="addBtn">
          + Add Task
        </RoundedButton>
      </Header>
      <TasksContainer>
        {tasks.map((item) => (
          <Task key={item.id} task={item} />
        ))}
      </TasksContainer>
      <div>
        <RoundedButton type="submit" typeBtn="delBtn">
          Delete column
        </RoundedButton>
      </div>
    </CardList>
  );
};
