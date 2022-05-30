import { Overlay } from '../common/Overlay';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <>
      <Overlay />
      <Spinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
    </>
  );
};
