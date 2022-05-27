import { useFormik } from 'formik';
import { PopUp } from '@/components/common/PopUp';
import { TextInput } from '@/components/common/TextInput';
import { RoundedButton } from '../common/RoundedButton';
import { FormStyled, InputWrapper } from './ColumnCreator.styled';
import axios from 'axios';

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
      axios.post(`https://kanban-rest77.herokuapp.com/boards/da90f759-014e-40fc-96d1-0970631acb80/columns`, {title: values.title } ,{
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTM2NzJhOS1jY2JkLTRjMmEtOGI1Yy0zYjAzNDQyNzQ4YzUiLCJsb2dpbiI6InRlc3QxMjMiLCJpYXQiOjE2NTM2MzMyNjJ9.melw7nOQCOT9rcO6Kz6JaKWmLFh8Tgq4GxBTF5R1Ty4'}
    
        }).then(response => console.log(response) )
        .catch(error => {
            console.error('There was an error!', error);
        });

        
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
