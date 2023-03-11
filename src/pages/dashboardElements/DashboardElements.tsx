import { Row, Col } from "antd";
import BarrieWeather from "../dashboard/barrieWeather/BarrieWeather";
import CatFacts from "../dashboard/catFacts/CatFacts";
import CompoundInterestCalculator from "../dashboard/compoundInterestCalculator/CompoundInterestCalculator";
import ProfileInformation from "../dashboard/profileInformation/ProfileInformation";
import * as S from "../../styles";

const DashboardElements = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={8}>
        <ProfileInformation />
      </Col>
      <Col span={16}>
        <CatFacts />
      </Col>
      <Col span={12}>
        <BarrieWeather />
      </Col>
      <Col span={12}>
        <S.WidgetCard>
          <S.WidgetTitle>Compound Interest Calculator</S.WidgetTitle>
          <CompoundInterestCalculator />
        </S.WidgetCard>
      </Col>
    </Row>
  );
}

export default DashboardElements;
