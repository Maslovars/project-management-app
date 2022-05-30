import { Container, Description, Input, Error } from './TextInput.styled';

interface TextInputProps {
  htmlFor: string;
  name: string;
  description?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (newValue: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  htmlFor,
  name,
  type = 'text',
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
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <Error>{error}</Error>}
    </Container>
  );
};
