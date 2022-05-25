import { useFormik } from 'formik';
import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '../common/RoundedButton';
import { FormStyled, InputWrapper } from './ColumnCreator.styled';

interface ColumnCreatorProps {
  handlerColumn: () => void;
}

interface Errors {
  title?: string;
}

export const ColumnCreator: React.FC<ColumnCreatorProps> = ({ handlerColumn }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: (values) => {
      handlerColumn();
      alert(values.title);
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
    <PopUp closePopUp={handlerColumn} title="Creat Column">
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <TextInput
            htmlFor="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
          />
        </InputWrapper>

        <RoundedButton type="submit" typeBtn="addBtn" variant="big">
          Confirm
        </RoundedButton>
      </FormStyled>
    </PopUp>
  );
};
