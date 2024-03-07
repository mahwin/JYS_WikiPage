import type { HTMLAttributes, MouseEvent, ReactElement } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactElement;
  disabled?: boolean;
  islink?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({
  children,
  islink = "false",
  disabled = false,
  onClick,
  ...props
}: Props) {
  return (
    <ButtonStyle
      onClick={onClick}
      islink={islink}
      disabled={disabled}
      {...props}
    >
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

  text-decoration: ${(props) =>
    props.islink !== "false" ? "underline" : "none"};

  background-color: ${(props) =>
    props.islink !== "false" ? "transparent" : props.theme.color.background};

  &:not(:disabled):hover {
    color: ${(props) => props.theme.color.hover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
