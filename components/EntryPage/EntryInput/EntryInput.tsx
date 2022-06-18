import { Description, Input } from '../../common/TextInput/TextInput.styled';
import { useField } from 'formik';
import { ErrorMessage, Container, ErrorMessageWrap } from './EntryInput.styled';

interface IEntryInputProps {
  label: string;
  htmlFor: string;
  name: string;
  type: string;
  placeholder?: string;
  id?: string;
}

export const EntryInput: React.FC<IEntryInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Container>
      <label htmlFor={props.id || props.name}>
        <Description>{label}:</Description>
        <Input {...field} {...props} />
        <ErrorMessageWrap>
          {meta.touched && meta.error ? (
            <ErrorMessage className='error'>{meta.error}</ErrorMessage>
          ) : null}
        </ErrorMessageWrap>
      </label>
    </Container>
  );
};
