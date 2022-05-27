import { useFormik } from 'formik';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { FormStyled, ButtonGroup } from './TitleChanger.styled';

interface TitleChanger {
  closeTitleChanger: () => void;
  currentTitle: string;
  titleHandler: (newTitle: string) => void;
}

interface Errors {
  title?: string;
}

export const TitleChanger: React.FC<TitleChanger> = ({
  closeTitleChanger,
  currentTitle,
  titleHandler,
}) => {
  const formik = useFormik({
    initialValues: {
      title: currentTitle,
    },
    onSubmit: (values) => {
      closeTitleChanger();
      titleHandler(values.title);
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
    <FormStyled onSubmit={formik.handleSubmit}>
      <ButtonGroup>
        <RoundedButton typeBtn='addBtn' variant='small'>
          Submit
        </RoundedButton>
        <RoundedButton type='button' onClick={closeTitleChanger} typeBtn='delBtn' variant='small'>
          Chancel
        </RoundedButton>
      </ButtonGroup>
      <TextInput
        htmlFor='title'
        name='title'
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
    </FormStyled>
  );
};
