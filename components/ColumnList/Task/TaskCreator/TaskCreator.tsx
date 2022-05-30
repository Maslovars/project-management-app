import { useFormik } from 'formik';

import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import { closeTaskCreator } from 'store/reducers/boardSlice';
import { createTask } from 'store/actionCreators/boardActionCreator';

import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { TextArea } from '@/components/common/TextArea/TeaxtArea';
import { RoundedButton } from '@/components/common/RoundedButton/RoundedButton';
import { Select } from '@/components/common/Select/Select';

import { FormStyled, InputWrapper } from './TaskCreator.styled';

interface TaskCreatorProps {
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

export const TaskCreator: React.FC<TaskCreatorProps> = ({
  title = '',
  assigned = '',
  description = '',
  boardId,
  columnId,
}) => {
  const { currentColumnId } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(closeTaskCreator());
  };

  const formik = useFormik({
    initialValues: {
      title: title,
      assigned: assigned,
      description: description,
    },
    onSubmit: ({ title, assigned, description }) => {
      dispatch(createTask({ boardId, title, description, assigned, currentColumnId }));
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
    <PopUp closePopUp={close} title="Add Task">
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
