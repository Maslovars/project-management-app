import { useFormik } from 'formik';
import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { TextArea } from '@/components/common/TextArea/Teaxtarea';
import { RoundedButton } from '@/components/common/RoundedButton/RoundedButton';
import { FormStyled, InputWrapper } from './TaskCreator.styled';
import { FileInput } from '@/components/common/FileInput/FileInput';

interface ColumnCreatorProps {
  closer: () => void;
  title?: string;
  assigned?: string;
  description?: string;
}

interface Errors {
  title?: string;
}

export const TaskCreator: React.FC<ColumnCreatorProps> = ({
  closer,
  title = '',
  assigned = '',
  description = '',
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
      alert(values);
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
    <PopUp closePopUp={closer} title='Add Task'>
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <TextInput
            htmlFor='title'
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
            description='Title'
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            htmlFor='assigned'
            name='assigned'
            value={formik.values.assigned}
            onChange={formik.handleChange}
            description='Assigned'
          />
        </InputWrapper>
        <InputWrapper>
          <TextArea
            htmlFor='description'
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            description='Description'
          />
        </InputWrapper>
        <InputWrapper>
          <FileInput />
        </InputWrapper>
        <RoundedButton type='submit' typeBtn='addBtn' variant='big'>
          Confirm
        </RoundedButton>
      </FormStyled>
    </PopUp>
  );
};
