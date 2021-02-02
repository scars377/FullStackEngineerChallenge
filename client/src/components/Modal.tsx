import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: #0007;
`;

const Content = styled.div`
  position: absolute;
  background: #fff;
  padding: 2em;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) =>
  createPortal(
    <Backdrop>
      <Content>{children}</Content>
    </Backdrop>,
    document.getElementById('modal')!,
  );

export default Modal;
