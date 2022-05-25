import { Draggable } from 'react-beautiful-dnd';
import { RoundedButton } from '@/components/common/RoundedButton';
import { FileList } from './FileList/FileList';
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
  ButtonGroup,
} from './Task.styled';
import { TaskTypes } from '@/types/data';
import { useState } from 'react';
import { ConfirmModal } from '@/components/ConfirmModal';

interface TaskProps {
  index: number;
  task: TaskTypes;
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  const { id, title, done, description, userId, files, boardId } = task;
  const [checked, setChecked] = useState(done);
  const [modalActive, setModalActive] = useState(false);

  const handleChecked = (): void => {
    setChecked(!checked);
  };

  const deleteTask = () => {
    setModalActive(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      alert(`TASK: ${title} DELETE`);
    }
    if (!result) {
      return;
    }
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
          <Assigned>
            <Avatar src="../img/user-avatar.png" alt={userId} /> <Name>User Name</Name>
          </Assigned>
          <Description>{description}</Description>
          <FileList files={files} />
          <ButtonGroup>
            <RoundedButton type="button" typeBtn="editBtn" variant="small">
              Edit
            </RoundedButton>
            <RoundedButton onClick={deleteTask} type="button" typeBtn="delBtn" variant="small">
              Delete
            </RoundedButton>
          </ButtonGroup>
          <ConfirmModal active={modalActive} setActive={setModalActive} isConfirm={confirmDelete} />
        </Card>
      )}
    </Draggable>
  );
};
