import { Overlay } from '@/components/common/Overlay';
import { RoundedButton } from '@/components/common/RoundedButton';
import { Modal, Title, ButtonGroup, ModalContent } from './ConfirmModal.styled';

interface ConfirmModalProps {
  active: boolean;
  setActive: () => void;
  isConfirm: () => boolean;
}

export const ConfirmModal = ({ active, setActive, isConfirm }) => {
  const confirmed = () => {
    setActive(false);
    isConfirm(true);
  };

  const canceled = () => {
    setActive(false);
    isConfirm(false);
  };

  return (
    <Modal active={active}>
      <ModalContent active={active}>
        <Title>Are you sure?</Title>
        <ButtonGroup>
          <RoundedButton onClick={confirmed} variant="big" type="button" typeBtn="addBtn">
            Ok
          </RoundedButton>
          <RoundedButton onClick={canceled} variant="big" type="button" typeBtn="delBtn">
            Cancel
          </RoundedButton>
        </ButtonGroup>
      </ModalContent>
    </Modal>
  );
};
