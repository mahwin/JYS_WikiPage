import styled from "styled-components";

import { HTMLAttribute } from "react";

export interface Props extends HTMLAttributes<HTMLTextareaElement> {}

export function Textarea(Props) {
  return <TextareaStyle {...Props} />;
}

const TextareaStyle = styled.textarea`
  padding: 12px 24px;
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;

  border-radius: 0.5rem;
  border: none;
  transition: color 0.3s ease-in-out;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;
