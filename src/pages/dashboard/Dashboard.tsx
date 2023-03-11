import { Navigate } from "react-router-dom";
import useAuth from "../../services/auth";
import { Layout, Menu, theme, MenuProps, Button, Row, Col } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import * as S from "../../styles";
import ProfileInformation from "./profileInformation/ProfileInformation";
import CatFacts from "./catFacts/CatFacts";
import BarrieWeather from "./barrieWeather/BarrieWeather";
import CompoundInterestCalculator from "./compoundInterestCalculator/CompoundInterestCalculator";

const Dashboard = () => {
  const { isUserLoggedIn, logoutUser } = useAuth();

  const items1: MenuProps['items'] = ['Home', 'Weather', 'Profile', 'Tasks'].map((key) => ({
    key,
    label: `${key}`,
  }));

  const logoutButton = {
    key: 'Log Out',
    label: (
      <Button type="primary" block danger>
        Log Out
      </Button>
    ),
    onClick: logoutUser,
  }


  // redirect to login page if user is not logged in
  if (!isUserLoggedIn) return <Navigate to="/" />

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <S.DashboardTitle>Jay's Dash</S.DashboardTitle>
        <Menu theme="dark" defaultSelectedKeys={['Home']} mode="inline" items={[...items1, logoutButton]} />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '32px 32px' }}>
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
        </Content>
        <Footer style={{ textAlign: 'center' }}>Jay Mistry &middot; 200508432</Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard;