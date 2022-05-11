import { RoundedButton } from '../common/RoundedButton';
import { Card, Header, Title, Body, Column, ColumnTitle } from './BoardPreview.styled';

interface Column {
  id: number;
  title: string;
}

interface BoardPreviewProps {
  id: number;
  title: string;
  columns: Column[];
}

export const BoardPreview: React.FC<BoardPreviewProps> = ({ id, title, columns }) => {
  return (
    <Card key={id}>
      <Header>
        <Title>{title}</Title>
        <RoundedButton type="submit" variant="big" typeBtn="delBtn">
          Delete Board
        </RoundedButton>
      </Header>
      <Body>
        {columns.map((column) => {
          return (
            <Column key={column.id}>
              <ColumnTitle>{column.title}</ColumnTitle>
            </Column>
          );
        })}
      </Body>
    </Card>
  );
};
