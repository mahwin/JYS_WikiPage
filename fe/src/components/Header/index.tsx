import styled from "styled-components";
import { Space, Button } from "../Common/";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navagate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderStyle>
        <Button.Link islink={true}>Home</Button.Link>
        <Space />
        <Button.Base disabled={true}>로그인</Button.Base>
        <Button.Submit disabled={true}>회원가입</Button.Submit>
      </HeaderStyle>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const HeaderStyle = styled.header`
  display: flex;
  width: ${(props) => props.theme.size.width};
  border: 1px solid red;
  margin: 0 auto;
`;
