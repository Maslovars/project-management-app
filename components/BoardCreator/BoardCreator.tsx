import { useFormik } from 'formik';
import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '../common/RoundedButton';
import { FormStyled, InputWrapper } from './BoardCreator.styled';
import { useAppDispatch } from 'hooks/reduxHooks';
import { createBoard } from 'store/actionCreators/mainActionCreator';

interface BoardCreatorProps {
  closeBoardCreator: () => void;
}

interface Errors {
  title?: string;
  description?: string;
}

export const BoardCreator: React.FC<BoardCreatorProps> = ({ closeBoardCreator }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: ({ title, description }) => {
      dispatch(createBoard({ title, description }));
      closeBoardCreator();
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
    <PopUp closePopUp={closeBoardCreator} title='Create board'>
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
          <TextInput
            htmlFor='description'
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.errors.description}
            description='Description'
          />
        </InputWrapper>

        <RoundedButton type='submit' typeBtn='addBtn' variant='big'>
          Confirm
        </RoundedButton>
      </FormStyled>
    </PopUp>
  );
};
