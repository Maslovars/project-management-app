import { Overlay } from '../Overlay';
import { Modal, Header, Title, Close, Body } from './PopUp.styled';
import { TextInput } from '../TextInput';
import { RoundedButton } from '../RoundedButton';
import { ReactNode } from 'react';

interface PopUpProps {
  title: string;
  children: ReactNode;
}

export const PopUp: React.FC<PopUpProps> = ({ title, children }) => {
  return (
    <>
      <Overlay />
      <Modal>
        <Header>
          <Title>{title}</Title>
          <Close>&#10006;</Close>
        </Header>
        <Body>
          {children}
          <RoundedButton type='submit' typeBtn='addBtn' variant='big'>
            Confirm
          </RoundedButton>
        </Body>
      </Modal>
    </>
  );
};
