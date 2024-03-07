import type { HTMLAttributes } from "react";
import styled from "styled-components";

type TextType = "display" | "title" | "label";
type SizeType = "lg" | "md" | "sm";

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  type?: TextType;
  size?: SizeType;
  bold?: boolean;
  underline?: boolean;
}

export function Text({
  className,
  children,
  type = "label",
  size = "md",
  bold = false,
  underline = false,
  ...props
}: Props) {
  return <StyledText {...props}>{children}</StyledText>;
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

const StyledText = styled.span<TextProps>`
  font-size: ${(props) => {
    switch (props.type) {
      case "display":
        return "2em";
      case "title":
        return "1.5em";
      case "body":
        return "1em";
      case "label":
      default:
        return "0.75em";
    }
  }};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;
