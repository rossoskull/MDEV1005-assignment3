import * as S from '../../styles';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import Icon from '@ant-design/icons';

const Register = () => {
  return (
    <S.FormContainer>
      <S.FormCard>
        <S.RegularTitle>Register</S.RegularTitle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={() => { }}
          onFinishFailed={() => { }}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Your name" />
          </Form.Item>

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
              Register
            </Button>
          </Form.Item>
          <Link to="/">
            <Button type="dashed" icon={<Icon component={FiUser} />} >Already have an account? Log in here</Button>
          </Link>
        </Form>
      </S.FormCard>
    </S.FormContainer >
  );
}

export default Register;
