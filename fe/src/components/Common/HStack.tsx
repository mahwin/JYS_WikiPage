import styled from "styled-components";

import { HTMLAttributes, ElementType, ReactElement } from "react";

export interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactElement;
}

export function HStack({ children, className, as = "div", ...props }: Props) {
  const As = as;

  return (
    <Column as={As} {...props}>
      {children}
    </Column>
  );
}

const Column = styled.div`
  display: "flex";
  flex-direction: "column";
`;
