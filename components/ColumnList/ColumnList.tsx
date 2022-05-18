import { Column } from '@/components/ColumnList/Column';
import { Container, Item } from './ColumnList.styled';
import { ColumnTypes } from '@/types/data';

interface ColumnListProps {
  columns: ColumnTypes[];
}

export const ColumnList: React.FC<ColumnListProps> = ({ columns }) => {
  return (
    <Container>
      {columns.map((column) => {
        return (
          <Item key={column.id}>
            <Column id={column.id} title={column.title} tasks={column.tasks} />
          </Item>
        );
      })}
    </Container>
  );
};
