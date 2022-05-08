import { Task } from './Task';
import { RoundedButton } from '@/components/common/RoundedButton';
import { CardList, Header, Title, TasksContainer, Container } from './Column.styled';
import { TaskTypes } from '@/types/data';

interface ColumnProps {
  tasks: TaskTypes[];
}

export const Column: React.FC<ColumnProps> = ({ tasks }) => {
  return (
    <Container>
      <CardList>
        <Header>
          <Title>Backlog</Title>
          <RoundedButton type="button" typeBtn="addBtn">
            + Add Task
          </RoundedButton>
        </Header>
        <TasksContainer>
          {tasks.map((item) => (
            <Task task={item} />
          ))}
        </TasksContainer>

        <RoundedButton type="submit" typeBtn="delBtn">
          - Delete column
        </RoundedButton>
      </CardList>
    </Container>
  );
};
