import { useState } from 'react';
import { Container, Label, Input, Title } from './FileInput.styled';

export const FileInput = () => {
  const [title, setTitle] = useState('Add file');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files.length !== 0) {
      setTitle(e.currentTarget?.files[0].name);
      setIsEmpty(false);
    } else {
      setTitle('Add file');
      setIsEmpty(true);
    }
  };

  return (
    <Container>
      <Label empty={isEmpty}>
        <Input type='file' onChange={handleChange} />
        <Title empty={isEmpty}>{title}</Title>
      </Label>
    </Container>
  );
};
