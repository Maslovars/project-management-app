import { RoundedButton } from '@/components/common/RoundedButton';
import { StyledLink, Card, Header, Title, Body } from './BoardPreview.styled';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from 'hooks/reduxHooks';
import { deleteBoard } from 'store/actionCreators/mainActionCreator';
import { useState } from 'react';
import { ConfirmModal } from '../ConfirmModal';

export interface BoardPreviewType {
  id: string;
  title: string;
  description: string;
}

export const BoardPreview: React.FC<BoardPreviewType> = ({ id, title, description }) => {
  const { t } = useTranslation('board');
  const dispatch = useAppDispatch();
  const [modal, showModal] = useState(false);

  const deleteCurrentBoard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showModal(true);
  };

  const confirmDelete = (result: boolean) => {
    if (result) {
      dispatch(deleteBoard(id));
    }
    if (!result) {
      return;
    }
  };

  return (
    <>
      <Link href={`/board/${id}`}>
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
      <ConfirmModal active={modal} setActive={showModal} isConfirm={confirmDelete} />
    </>
  );
};
