import { useFormik } from 'formik';
import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { TextArea } from '@/components/common/TextArea/TeaxtArea';
import { RoundedButton } from '@/components/common/RoundedButton/RoundedButton';
import { FormStyled, InputWrapper } from './TaskChanger.styled';
import { FileInput } from '@/components/common/FileInput/FileInput';
import axios from 'axios';

import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import { closeTaskChanger } from 'store/reducers/boardSlice';
import { changeTask } from 'store/actionCreators/boardActionCreator';
import { Select } from '@/components/common/Select/Select';

interface ChangerProps {
  closer?: () => void;
  title?: string;
  assigned?: string;
  description?: string;
  boardId: string;
  columnId?: string;
}

interface Errors {
  title?: string;
  description?: string;
  assigned?: string;
}

export const TaskChanger: React.FC<ChangerProps> = ({
  closer,
  title = '',
  assigned = '',
  description = '',
  boardId,
  columnId,
}) => {
  const dispatch = useAppDispatch();
  const {
    currentColumnId,
    currentTitle,
    currentOrder,
    currentDescription,
    currentUserId,
    currentBoardId,
    currentTaskId,
  } = useAppSelector((state) => state.boardReducer);

  const close = () => {
    dispatch(closeTaskChanger());
  };

  const formik = useFormik({
    initialValues: {
      title: currentTitle,
      assigned: currentUserId,
      description: currentDescription,
    },

    onSubmit: ({ title, assigned, description }) => {
      dispatch(
        changeTask({
          currentBoardId,
          title,
          currentOrder,
          description,
          assigned,
          currentColumnId,
          currentTaskId,
        })
      );
      close();
    },

    validate: (values) => {
      const errors: Errors = {};
      if (!values.title.trim()) {
        errors.title = 'The Title not be empty!';
      }

      if (!values.description.trim()) {
        errors.description = 'The Description not be empty!';
      }

      if (!values.assigned.trim()) {
        errors.assigned = 'Choose assigned!';
      }

      return errors;
    },
  });

  return (
    <PopUp closePopUp={close} title="Edit Task">
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
          <Select
            htmlFor="assigned"
            name="assigned"
            value={formik.values.assigned}
            onChange={formik.handleChange}
            description="Assigned"
            error={formik.errors.assigned}
          />
        </InputWrapper>

        <InputWrapper>
          <TextArea
            htmlFor="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            description="Description"
            error={formik.errors.description}
          />
        </InputWrapper>

        <RoundedButton type="submit" typeBtn="addBtn" variant="big">
          Confirm
        </RoundedButton>
      </FormStyled>
    </PopUp>
  );
};
