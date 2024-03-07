import styled from "styled-components";
import { useState, useEffect, forwardRef } from "react";
import ReactDOM from "react-dom";

export interface Props extends HTMLAttributes<HTMLDialogElement> {
  onBackdropPressed?: () => void;
}

export const Modal = forwardRef<Props>(
  ({ onBackdropPressed, children, ...props }, ref) => {
    const handleClickBackdrop = (e: MouseEvent<HTMLDialogElement>) => {
      const $target = e.target as HTMLDialogElement;

      if ($target.nodeName !== "DIALOG") return;

      if (onBackdropPressed instanceof Function) {
        onBackdropPressed();
      }
    };

    return ReactDOM.createPortal(
      <ModalStyle
        ref={ref}
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={handleClickBackdrop}
        {...props}
      >
        <ModalContent>{children}</ModalContent>
      </ModalStyle>,
      document.body
    );
  }
);

const ModalStyle = styled.dialog`
  border-radius: 0.5rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  _backdrop: {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(0.1rem);
  }
`;

const ModalContent = styled.section`
  width: 100%;
  height: 100%;
`;
