import * as S from '../../styles';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import Icon from '@ant-design/icons';

const Login = () => {
  return (
    <S.FormContainer>
      <S.FormCard>
        <S.RegularTitle>Log In</S.RegularTitle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={() => { }}
          onFinishFailed={() => { }}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Your email address" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Your password" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
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
