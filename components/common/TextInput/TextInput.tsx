import { Container, Description, Input } from './TextInput.styled';

interface TextInputProps {
  htmlFor: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ htmlFor, name, type='text', placeholder }) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>
        <Description>{name}:</Description>
        <Input type={type} name={name} placeholder={placeholder} />
      </label>
    </Container>
  );
};
