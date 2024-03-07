import type { HTMLAttributes } from "react";
import styled from "styled-components";

type TextType = "display" | "title" | "label";
type SizeType = "lg" | "md" | "sm";

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  type?: TextType;
  size?: SizeType;
  bold?: string;
  underline?: string;
}

export function Text({
  className,
  children,
  type = "label",
  size = "md",
  bold = "false",
  underline = "false",
  ...props
}: Props) {
  return (
    <StyledText type={type} underline={underline} bold={bold} {...props}>
      {children}
    </StyledText>
  );
}

Text.Display = function ({ children, ...props }: Omit<Props, "type">) {
  return (
    <Text type="display" {...props}>
      {children}
    </Text>
  );
};

Text.Title = function ({ children, ...props }: Omit<Props, "type">) {
  return (
    <Text type="title" {...props}>
      {children}
    </Text>
  );
};

Text.Body = function ({ children, ...props }: Omit<Props, "type">) {
  return (
    <Text type="body" {...props}>
      {children}
    </Text>
  );
};

Text.Label = function ({ children, ...props }: Omit<Props, "type">) {
  return (
    <Text type="label" {...props}>
      {children}
    </Text>
  );
};

const StyledText = styled.span<{
  type: string;
  bold: string;
  underline: string;
}>`
  font-size: ${(props) => {
    switch (props.type) {
      case "display":
        return "3rem";
      case "title":
        return "1.5rem";
      case "body":
        return "1rem";
      case "label":
        return "0.75rem";
    }
  }};
  text-decoration: ${(props) =>
    props.underline === "underline" ? "underline" : "none"};
  font-weight: ${(props) => (props.bold === "bold" ? "bold" : "normal")};
`;
