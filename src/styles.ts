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

export const DashboardTitle = styled.h1`
  color: white;
  font-weight: 500;
  font-size; 36px;
  margin: 48px 0px 16px 28px;
`

export const WidgetCard = styled.div`
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, .1);
  border-radius: 8px;
  padding: 20px;
  height: 100%;
`;

export const WidgetTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
`;

export const FactTitle = styled.p`
  font-size: 14px;
  color: #999;
`;

export const FactContent = styled.p`
  font-size: 18px;
  font-style: italic;
  color: black;
  margin: 8px 0px 0px;
`;

export const PageTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;

export const PageSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #aaa;
`;