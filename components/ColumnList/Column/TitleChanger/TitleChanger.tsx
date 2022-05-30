import { useFormik } from 'formik';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { FormStyled, ButtonGroup } from './TitleChanger.styled';
import axios from 'axios';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { changeColumnTitle } from '../../../../store/actionCreators/boardActionCreator';

interface TitleChanger {
  closeTitleChanger: () => void;
  currentTitle: string;
  titleHandler: (newTitle: string) => void;
  columnOrder: number;
  boardId: string;
  columnId: string;
  testIndex?;
}

interface Errors {
  title?: string;
}

export const TitleChanger: React.FC<TitleChanger> = ({
  closeTitleChanger,
  currentTitle,
  titleHandler,
  columnOrder,
  boardId,
  columnId,
  testIndex,
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: currentTitle,
    },
    onSubmit: ({ title }) => {
      closeTitleChanger();
      dispatch(changeColumnTitle({ boardId, columnId, title, columnOrder }));
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
