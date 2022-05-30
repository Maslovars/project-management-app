import { useAppSelector } from 'hooks/reduxHooks';
import { Container, Description, SelectStyled, Error } from './Select.styled';

interface SelectProps {
  htmlFor: string;
  name: string;
  description?: string;
  value?: string;
  onChange?: (newValue: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({
  htmlFor,
  name,
  description,
  value,
  onChange,
  error,
}) => {
  const { users } = useAppSelector((state) => state.boardReducer);

  return (
    <Container>
      <label htmlFor={htmlFor}>
        {description && <Description>{description}:</Description>}
        <SelectStyled name={name} value={value} onChange={onChange}>
          <option disabled value="">
            Set assigned
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </SelectStyled>
      </label>
      {error && <Error>{error}</Error>}
    </Container>
  );
};
