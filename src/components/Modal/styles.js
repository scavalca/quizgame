import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
  width: 300px;
  height: 300px;
    
  ${(props) => (props.isShowing
    ? css`
      opacity: 1;
      pointer-events: all;
    ` : css`
      opacity: 0;
      pointer-events: none;
    `)
};

  z-index: 100;

  transition: all 200ms ease;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);


  ${(props) => (props.isShowing
    ? css`
      opacity: 1;
      pointer-events: all;
    ` : css`
      opacity: 0;
      pointer-events: none;
    `)
};

  z-index: 10;

  transition: all 200ms ease;
`;
