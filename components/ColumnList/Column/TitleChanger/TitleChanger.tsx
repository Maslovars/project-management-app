import { useFormik } from 'formik';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { FormStyled, ButtonGroup } from './TitleChanger.styled';
import axios from 'axios';

interface TitleChanger {
  closeTitleChanger: () => void;
  currentTitle: string;
  titleHandler: (newTitle: string) => void;
  columnOrder: number;
  boardId: string;
  columnId: string;
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
}) => {
  const formik = useFormik({
    initialValues: {
      title: currentTitle,
    },
    onSubmit: (values) => {
      closeTitleChanger();
      // titleHandler(values.title);
      axios
        .put(
          `https://kanban-rest77.herokuapp.com/boards/${boardId}/columns/${columnId}`,
          { title: values.title, order: columnOrder },
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
      let errors: Errors = {};
      if (!values.title.trim()) {
        errors.title = 'The Title not be empty!';
      }

      return errors;
    },
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <ButtonGroup>
        <RoundedButton typeBtn="addBtn" variant="small">
          Submit
        </RoundedButton>
        <RoundedButton type="button" onClick={closeTitleChanger} typeBtn="delBtn" variant="small">
          Chancel
        </RoundedButton>
      </ButtonGroup>
      <TextInput
        htmlFor="title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
    </FormStyled>
  );
};
