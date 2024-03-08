import styled from "styled-components";
import { Text } from "../Common";

export function Footer() {
  return (
    <FooterWrapper>
      <Text.Display>Footer</Text.Display>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.section`
  height: 200px;
  width: ${(props) => props.theme.size.width};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
