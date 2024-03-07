import styled from "styled-components";

export function Space() {
  return <DivStyle className={style}></DivStyle>;
}

const DivStyle = styled.div`
  flex-grow: "1";
`;
