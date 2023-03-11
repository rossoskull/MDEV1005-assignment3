import { Row, Col } from "antd";
import BarrieWeather from "../dashboard/barrieWeather/BarrieWeather";
import CatFacts from "../dashboard/catFacts/CatFacts";
import CompoundInterestCalculator from "../dashboard/compoundInterestCalculator/CompoundInterestCalculator";
import ProfileInformation from "../dashboard/profileInformation/ProfileInformation";
import UsersList from "../dashboard/usersList/UsersList";
import Calendar from "../dashboard/calendar/Calendar";
import * as S from "../../styles";
import RandomQuoteGenerator from "../dashboard/randomQuoteGenerator/RandomQuoteGenerator";

const DashboardElements = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={8}>
        <ProfileInformation />
      </Col>
      <Col span={8}>
        <S.WidgetCard>
          <S.WidgetTitle>All Registered Users</S.WidgetTitle>
          <p>This is a list of all registered users on this app:</p>
          <UsersList />
        </S.WidgetCard>
      </Col>
      <Col span={8}>
        <Calendar />
      </Col>
      <Col span={12}>
        <RandomQuoteGenerator />
      </Col>
      <Col span={12}>
        <CatFacts />
      </Col>
      <Col span={14}>
        <BarrieWeather />
      </Col>
      <Col span={10}>
        <S.WidgetCard>
          <S.WidgetTitle>Compound Interest Calculator</S.WidgetTitle>
          <CompoundInterestCalculator />
        </S.WidgetCard>
      </Col>

    </Row>
  );
}

export default DashboardElements;
