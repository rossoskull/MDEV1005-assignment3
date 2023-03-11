import { Link, Navigate, Outlet, Route } from "react-router-dom";
import useAuth from "../../services/auth";
import { Layout, Menu, theme, MenuProps, Button, Row, Col } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import * as S from "../../styles";

const Dashboard = () => {
  const { isUserLoggedIn, logoutUser } = useAuth();

  const menuItems = [
    {
      key: '1',
      label: (
        <Link to="/dashboard">Dashboard</Link>
      )
    },
    {
      key: '2',
      label: (
        <Link to="/dashboard/interest-calculator">CI Calculator</Link>
      )
    },
    {
      key: '3',
      label: (
        <Link to="/dashboard/cat-facts">Cat Facts</Link>
      )
    },
    {
      key: '4',
      label: (
        <Link to="/dashboard/tasks">Task Manager</Link>
      )
    },
    {
      key: '5',
      label: (
        <Button type="primary" block danger>
          Log Out
        </Button>
      ),
      onClick: logoutUser,
    }
  ]


  // redirect to login page if user is not logged in
  if (!isUserLoggedIn) return <Navigate to="/" />

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <S.DashboardTitle>Jay's Dash</S.DashboardTitle>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '32px 32px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Jay Mistry &middot; 200508432</Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard;