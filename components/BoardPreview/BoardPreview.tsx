import { RoundedButton } from '@/components/common/RoundedButton';
import { StyledLink, Card, Header, Title, Body } from './BoardPreview.styled';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { BoardType } from '@/types/data';
import { useAppDispatch } from 'hooks/reduxHooks';
import { deleteBoard } from 'store/actionCreators/mainActionCreator';

export const BoardPreview: React.FC<BoardType> = ({ id, title, description }) => {
  const { t } = useTranslation('board');
  const dispatch = useAppDispatch();

  const deleteCurrentBoard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deleteBoard(id));
  };

  return (
    <Link href='/board'>
      <Card key={id}>
        <StyledLink>
          <Header>
            <Title>{title}</Title>
            <RoundedButton
              type='submit'
              variant='big'
              typeBtn='delBtn'
              onClick={(e) => deleteCurrentBoard(e)}
            >
              {t('delete_board')}
            </RoundedButton>
          </Header>
          <Body>{description}</Body>
        </StyledLink>
      </Card>
    </Link>
  );
};
