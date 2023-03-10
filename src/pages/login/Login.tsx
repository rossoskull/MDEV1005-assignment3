import * as S from '../../styles';
import { Button, Form, Input, message } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import Icon from '@ant-design/icons';
import useAuth from '../../services/auth';

const Login = () => {
  const { isUserLoggedIn, loginUser } = useAuth();
  const [messageApi, messageContext] = message.useMessage();

  if (isUserLoggedIn) return <Navigate to="/dashboard" />

  const handleFormSubmit = async (values: {
    email: string;
    password: string;
  }) => {
    const { email, password } = values;

    try {
      await loginUser(email, password);
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: 'Could not log you in! Are you sure you provided the correct details?'
      });
    }
  }

  return (
    <S.FormContainer>
      {messageContext}
      <S.FormCard>
        <S.RegularTitle>Log In</S.RegularTitle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleFormSubmit}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            hasFeedback
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Your email address" />
          </Form.Item>

          <Form.Item
            name="password"
            hasFeedback
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Your password" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
          <Link to="/register">
            <Button type="dashed" icon={<Icon component={FiUserPlus} />} >Don't have an account? Register here</Button>
          </Link>
        </Form>
      </S.FormCard>
    </S.FormContainer >
  );
}

export default Login;
