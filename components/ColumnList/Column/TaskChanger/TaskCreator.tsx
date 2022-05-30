import { useFormik } from 'formik';
import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { TextArea } from '@/components/common/TextArea/TeaxtArea';
import { RoundedButton } from '@/components/common/RoundedButton/RoundedButton';
import { FormStyled, InputWrapper } from './TaskCreator.styled';
import { FileInput } from '@/components/common/FileInput/FileInput';
import axios from 'axios';

interface ColumnCreatorProps {
  closer: () => void;
  title?: string;
  assigned?: string;
  description?: string;
  boardId: string;
  columnId: string;
}

interface Errors {
  title?: string;
}

export const TaskChanger: React.FC<ColumnCreatorProps> = ({
  closer,
  title = '',
  assigned = '',
  description = '',
  boardId,
  columnId,
}) => {
  const formik = useFormik({
    initialValues: {
      title: title,
      assigned: assigned,
      description: description,
      file: null,
    },
    onSubmit: (values) => {
      closer();
      axios
        .post(
          `https://kanban-rest77.herokuapp.com/boards/${boardId}/columns/${columnId}/tasks`,
          {
            title: values.title,
            description: values.description,
            userId: '953672a9-ccbd-4c2a-8b5c-3b03442748c5',
          },
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
    },

    validate: (values) => {
      const errors: Errors = {};
      if (!values.title.trim()) {
        errors.title = 'The Title not be empty!';
      }

      return errors;
    },
  });

  return (
    <PopUp closePopUp={closer} title="Add Task">
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <TextInput
            htmlFor="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
            description="Title"
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            htmlFor="assigned"
            name="assigned"
            value={formik.values.assigned}
            onChange={formik.handleChange}
            description="Assigned"
          />
        </InputWrapper>
        <InputWrapper>
          <TextArea
            htmlFor="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            description="Description"
          />
        </InputWrapper>
        <InputWrapper>
          <FileInput />
        </InputWrapper>
        <RoundedButton type="submit" typeBtn="addBtn" variant="big">
          Confirm
        </RoundedButton>
      </FormStyled>
    </PopUp>
  );
};
