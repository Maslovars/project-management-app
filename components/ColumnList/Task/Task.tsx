import { Draggable } from 'react-beautiful-dnd';
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
  index: number;
  task: TaskTypes;
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  const { id, title, done, order, description, userId, boardId, columnId, files } = task;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Assigned>
            <Avatar src="../img/user-avatar.png" alt={userId} /> <Name>User Name</Name>
          </Assigned>
          {files.map((item) => (
            <FileImage key={item.filename} src={item.filename} alt={item.filename} />
          ))}
          <ButtonGroup>
            <RoundedButton type="submit" typeBtn="editBtn" variant="small">
              Edit
            </RoundedButton>
            <RoundedButton type="submit" typeBtn="delBtn" variant="small">
              Delete
            </RoundedButton>
          </ButtonGroup>
        </Card>
      )}
    </Draggable>
  );
};
