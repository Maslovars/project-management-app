import { RoundedButton } from '@/components/common/RoundedButton';
import { StyledLink, Card, Header, Title, Body, Column, ColumnTitle } from './BoardPreview.styled';
import Link from 'next/link';
interface Column {
  id: string;
  title: string;
}

interface BoardPreviewProps {
  id: string;
  title: string;
  columns: Column[];
}

export const BoardPreview: React.FC<BoardPreviewProps> = ({ id, title, columns }) => {
  return (
    <Link href="/board">
      <Card key={id}>
        <StyledLink>
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
        </StyledLink>
      </Card>
    </Link>
  );
};
