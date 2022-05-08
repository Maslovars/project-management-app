import { Container, Description, Input } from './TextInput.styled';

interface TextInputProps {
  htmlFor: string;
  name: string;
}

export const TextInput: React.FC<TextInputProps> = ({ htmlFor, name }) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>
        <Description>{name}:</Description>
        <Input type="text" name={name} />
      </label>
    </Container>
  );
};
