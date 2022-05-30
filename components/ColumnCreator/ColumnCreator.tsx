import { useFormik } from 'formik';

import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';

import { useAppDispatch } from 'hooks/reduxHooks';
import { closeColumnCreator } from 'store/reducers/boardSlice';

import { FormStyled, InputWrapper } from './ColumnCreator.styled';
import { createColumn } from 'store/actionCreators/boardActionCreator';

interface ColumnCreatorProps {
  boardId: string;
}

interface Errors {
  title?: string;
}

export const ColumnCreator: React.FC<ColumnCreatorProps> = ({ boardId }) => {
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(closeColumnCreator());
  };

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: ({ title }) => {
      close();
      dispatch(createColumn({ boardId, title }));
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
    <PopUp closePopUp={close} title='Create Column'>
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <TextInput
            htmlFor='title'
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
          />
        </InputWrapper>

        <RoundedButton type='submit' typeBtn='addBtn' variant='big'>
          Confirm
        </RoundedButton>
      </FormStyled>
    </PopUp>
  );
};
