import { Container, Description, Input } from './TextInput.styled';

interface TextInputProps {
  htmlFor: string;
  name: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ htmlFor, name, placeholder }) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>
        <Description>{name}:</Description>
        <Input type="text" name={name} placeholder={placeholder} />
      </label>
    </Container>
  );
};
