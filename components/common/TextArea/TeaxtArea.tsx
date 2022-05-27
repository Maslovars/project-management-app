import { Container, Description, Textarea, Error } from './Textarea.styled';

interface TextAreaProps {
  htmlFor: string;
  name: string;
  description?: string;
  placeholder?: string;
  value?: string;
  onChange?: (newValue: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  htmlFor,
  name,
  placeholder,
  description,
  value,
  onChange,
  error,
}) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>
        {description && <Description>{description}:</Description>}
        <Textarea name={name} placeholder={placeholder} value={value} onChange={onChange} />
      </label>
      {error && <Error>{error}</Error>}
    </Container>
  );
};
