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
import { useEffect, useState } from 'react';
import { ConfirmModal } from '@/components/ConfirmModal';
import { TaskCreator } from '../Column/TaskCreator/TaskCreator';
import axios from 'axios';

interface TaskProps {
  index: number;
  task: TaskTypes;
  columnId: string;
  boardId: string;
}

export const Task: React.FC<TaskProps> = ({ task, index, columnId, boardId }) => {
  const [user, setUser] = useState('');
  const { id, title, done, description, userId, files } = task;
  const [checked, setChecked] = useState(done);
  const [modalActive, setModalActive] = useState(false);
  const [showTaskCreator, setShowTaskCreator] = useState(false);

  const handleChecked = (): void => {
    setChecked(!checked);
  };

  const deleteTask = () => {
    setModalActive(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      axios
        .delete(
          `https://kanban-rest77.herokuapp.com/boards/${boardId}/columns/${columnId}/tasks/${id}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTM2NzJhOS1jY2JkLTRjMmEtOGI1Yy0zYjAzNDQyNzQ4YzUiLCJsb2dpbiI6InRlc3QxMjMiLCJpYXQiOjE2NTM2MzMyNjJ9.melw7nOQCOT9rcO6Kz6JaKWmLFh8Tgq4GxBTF5R1Ty4',
            },
          }
        )
        .then((response) => console.log(response))
        .catch((error) => {
          console.error('There was an error!', error);
        });
    }
    if (!result) {
      return;
    }
  };

  const closeTaskCreator = () => {
    setShowTaskCreator(false);
  };

  const editTask = () => {
    setShowTaskCreator(true);
  };

  useEffect(() => {
    const getUser = async (id: string) => {
      const response = await axios.get(`https://kanban-rest77.herokuapp.com/users/${id}`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTM2NzJhOS1jY2JkLTRjMmEtOGI1Yy0zYjAzNDQyNzQ4YzUiLCJsb2dpbiI6InRlc3QxMjMiLCJpYXQiOjE2NTM2MzMyNjJ9.melw7nOQCOT9rcO6Kz6JaKWmLFh8Tgq4GxBTF5R1Ty4',
        },
      });
      const data = await response.data;

      setUser(data.name);
    };
    getUser(userId);
  }, []);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Header>
            <Title>{title}</Title>
            {/* <Check>
              <CheckInput type="checkbox" checked={checked} onChange={handleChecked} />
              <CheckBox checked={checked} />
            </Check> */}
          </Header>
          <Assigned>
            <Avatar src="../img/user-avatar.png" alt={userId} /> <Name>{user}</Name>
          </Assigned>
          <Description>{description}</Description>
          <FileList files={files} />
          <ButtonGroup>
            <RoundedButton onClick={editTask} type="button" typeBtn="editBtn" variant="small">
              Edit
            </RoundedButton>
            <RoundedButton onClick={deleteTask} type="button" typeBtn="delBtn" variant="small">
              Delete
            </RoundedButton>
          </ButtonGroup>
          {showTaskCreator && (
            <TaskCreator
              boardId={boardId}
              columnId={columnId}
              title={task.title}
              assigned={'User Name'}
              description={task.description}
              closer={closeTaskCreator}
            />
          )}
          <ConfirmModal active={modalActive} setActive={setModalActive} isConfirm={confirmDelete} />
        </Card>
      )}
    </Draggable>
  );
};
