import styled from "styled-components";

import { HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLInputElement> {}

export function Input(Props) {
  return <InputStyle {...Props} />;
}

const InputStyle = styled.input`
  padding: 12px 24px;
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;

  border-radius: 0.5rem;
  border: none;
  transition: color 0.3s ease-in-out;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};

  &:hover {
    color: ${(props) => props.theme.color.hover};
  }
`;
