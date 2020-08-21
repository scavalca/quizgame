import React from 'react';

import { Container, Overlay } from './styles';

const Modal = ({ isShowing, children }) => (
  <>
    <Container isShowing={isShowing}>
      {children}
    </Container>
    <Overlay isShowing={isShowing} />
  </>
);

export default Modal;
