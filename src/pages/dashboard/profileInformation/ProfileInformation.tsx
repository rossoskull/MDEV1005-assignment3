import { Descriptions } from "antd";
import useAuth from "../../../services/auth";
import * as S from "../../../styles";

const ProfileInformation = () => {
  const { userData, userInfo } = useAuth();

  return (
    <S.WidgetCard>
      <S.WidgetTitle>Profile Information</S.WidgetTitle>
      <Descriptions bordered>
        <Descriptions.Item span={3} label="Name">{userInfo.name}</Descriptions.Item>
        <Descriptions.Item span={3} label="Email">{userData ? userData.email : ""}</Descriptions.Item>
      </Descriptions>
    </S.WidgetCard>
  )
}

export default ProfileInformation;
