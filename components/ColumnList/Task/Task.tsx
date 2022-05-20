import { Draggable } from 'react-beautiful-dnd';
import { RoundedButton } from '@/components/common/RoundedButton';
import {
  Card,
  Header,
  Title,
  Check,
  CheckInput,
  CheckBox,
  Description,
  Assigned,
  Avatar,
  Name,
  FileImage,
  ButtonGroup,
} from './Task.styled';
import { TaskTypes } from '@/types/data';
import { useState } from 'react';

interface TaskProps {
  index: number;
  task: TaskTypes;
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  const { id, title, done, description, userId, files } = task;
  const [checked, setChecked] = useState(done);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Header>
            <Title>{title}</Title>
            <Check>
              <CheckInput type="checkbox" checked={checked} onChange={handleChecked} />
              <CheckBox checked={checked} />
            </Check>
          </Header>
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
