import { Overlay } from '../Overlay';
import { Modal, Header, Title, Close } from './PopUp.styled';
import { ReactNode } from 'react';

interface PopUpProps {
  title: string;
  children: ReactNode;
  closePopUp: () => void;
}

export const PopUp: React.FC<PopUpProps> = ({ title, children, closePopUp }) => {
  return (
    <>
      <Overlay />
      <Modal>
        <Header>
          <Title>{title}</Title>
          <Close onClick={closePopUp}>&#10006;</Close>
        </Header>
        <div>{children}</div>
      </Modal>
    </>
  );
};
