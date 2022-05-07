import { RoundedButton } from '@/components/common/RoundedButton';
import {
  Card,
  Title,
  Description,
  Assigned,
  Avatar,
  Name,
  FileImage,
  ButtonGroup,
} from './Task.styled';
import { TaskTypes } from '@/types/data';

interface TaskProps {
  task: TaskTypes;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const { id, title, description, avatar, name, fileImage } = task;

  return (
    <ul>
      <Card key={id}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Assigned>
          <Avatar src={avatar} alt={name} /> <Name>{name}</Name>
        </Assigned>
        <FileImage src={fileImage} alt={fileImage} />
        <ButtonGroup>
          <RoundedButton type="submit" typeBtn="editBtn" variant="small">
            Edit
          </RoundedButton>
          <RoundedButton type="submit" typeBtn="delBtn" variant="small">
            Delete
          </RoundedButton>
        </ButtonGroup>
      </Card>
    </ul>
  );
};
