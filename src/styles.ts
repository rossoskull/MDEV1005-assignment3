import styled from "styled-components";
import Title from "antd/es/typography/Title";

export const RegularTitle = styled(Title)`
  font-weight: 400 !important;
`;

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormCard = styled.div`
  width: 404px;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, .1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  border-radius: 8px;
  flex-flow: column;
`;
