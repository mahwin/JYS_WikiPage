import type { HTMLAttributes, MouseEvent, ReactElement } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactElement;
  disabled?: boolean;
  islink?: booelan;
}

export function Button({
  children,
  islink = false,
  disabled = false,
  ...props
}: Props) {
  return (
    <ButtonStyle islink={islink} disabled={disabled} {...props}>
      {children}
    </ButtonStyle>
  );
}

Button.Base = function ({ children, ...props }: Props) {
  return (
    <Button type="button" {...props}>
      {children}
    </Button>
  );
};

Button.Link = function ({ children, ...props }: Props) {
  return (
    <Button type="button" {...props}>
      {children}
    </Button>
  );
};

Button.Submit = function ({ children, ...props }: Props) {
  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  );
};

const ButtonStyle = styled.button<{ islink: boolean }>`
  padding: 12px 24px;
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;

  border-radius: 0.5rem;
  border: none;
  transition: color 0.3s ease-in-out;

  color: ${(props) => props.theme.color.text};

  text-decoration: ${(props) => (props.islink ? "underline" : "underline")};

  background-color: ${(props) =>
    props.islink ? "transparent" : props.theme.color.background};

  &:not(:disabled):hover {
    color: ${(props) => props.theme.color.hover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
