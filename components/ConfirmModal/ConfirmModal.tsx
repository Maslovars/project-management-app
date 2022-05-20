import { Overlay } from '@/components/common/Overlay';
import { RoundedButton } from '@/components/common/RoundedButton';
import { Modal, Title, ButtonGroup } from './ConfirmModal.styled';

export const ConfirmModal = () => {
  return (
    <>
      <Overlay />
      <Modal>
        <Title>Are you sure?</Title>
        <ButtonGroup>
          <RoundedButton variant="big" type="button" typeBtn="addBtn">
            Ok
          </RoundedButton>
          <RoundedButton variant="big" type="button" typeBtn="delBtn">
            Cancel
          </RoundedButton>
        </ButtonGroup>
      </Modal>
    </>
  );
};
