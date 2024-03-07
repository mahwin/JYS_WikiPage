import styled from "styled-components";

import { HTMLAttributes, ElementType, ReactElement } from "react";

export interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactElement;
}

export function VStack({ children, className, as = "div", ...props }: Props) {
  const As = as;

  return (
    <Row as={As} {...props}>
      {children}
    </Row>
  );
}

const Row = styled.div`
  display: flex;
`;
