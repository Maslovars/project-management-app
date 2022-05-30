import { useFormik } from 'formik';
import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '../common/RoundedButton';
import { FormStyled, InputWrapper } from './BoardCreator.styled';

interface ColumnCreatorProps {
  handlerColumn: () => void;
}

interface Errors {
  title?: string;
  description?: string;
}

export const BoardCreator: React.FC<ColumnCreatorProps> = ({ handlerColumn }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: (values) => {
      handlerColumn();
    },

    validate: (values) => {
      const errors: Errors = {};
      if (!values.title.trim()) {
        errors.title = 'The title not be empty!';
      }

      if (!values.description.trim()) {
        errors.description = 'The description not be empty!';
      }

      return errors;
    },
  });

  return (
    <PopUp closePopUp={handlerColumn} title='Create board'>
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <TextInput
            htmlFor='title'
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
          />
          <TextInput
            htmlFor='description'
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.errors.description}
          />
        </InputWrapper>

        <RoundedButton type='submit' typeBtn='addBtn' variant='big'>
          Confirm
        </RoundedButton>
      </FormStyled>
    </PopUp>
  );
};
