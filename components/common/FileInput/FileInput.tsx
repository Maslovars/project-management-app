import { Container, Label, Input, Title } from './FileInput.styled';

export const FileInput = () => {
  return (
    <Container>
      <Label>
        <Input type="file" />
        <Title>Add file</Title>
      </Label>
    </Container>
  );
};
