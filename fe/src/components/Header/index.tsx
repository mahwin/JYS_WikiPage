import styled from "styled-components";
import { Space, Button } from "../Common/";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <HeaderStyle>
      <Button.Link onClick={handleClick} islink="true">
        Home
      </Button.Link>
      <Space />
      <Button.Base disabled={true}>로그인</Button.Base>
      <Button.Submit disabled={true}>회원가입</Button.Submit>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  width: ${(props) => props.theme.size.width};
  padding: 12px 24px;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
