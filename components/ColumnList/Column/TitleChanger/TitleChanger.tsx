import { useFormik } from 'formik';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '@/components/common/RoundedButton';
import { ButtonGroup } from './TitleChanger.styled';

interface TitleChanger {
  closeTitleChanger: () => void;
  currentTitle: string;
  titleHandler: (newTitle: string) => void;
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
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        htmlFor="title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <ButtonGroup>
        <RoundedButton typeBtn="addBtn" variant="small">
          Submit
        </RoundedButton>
        <RoundedButton type="button" onClick={closeTitleChanger} typeBtn="delBtn" variant="small">
          Chancel
        </RoundedButton>
      </ButtonGroup>
    </form>
  );
};
