import { Column } from '@/components/ColumnList/Column';
import { Container, Item } from './ColumnList.styled';
import { ColumnTypes } from '@/types/data';

interface ColumnListProps {
  columns: ColumnTypes[];
}

export const ColumnList: React.FC<ColumnListProps> = ({ columns }) => {
  return (
    <Container>
      {columns.map(({ id, title, tasks }) => {
        return (
          <Item key={id}>
            <Column id={id} title={title} tasks={tasks} />
          </Item>
        );
      })}
    </Container>
  );
};
