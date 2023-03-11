import * as S from '../../styles';
import { Button, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import Icon from '@ant-design/icons';
import useAuth from '../../services/auth';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const { isUserLoggedIn, createUser } = useAuth();
  const [messageApi, messageContext] = message.useMessage();

  /**
   * this function is called once the form is submitted
   * it takes the name, email and password submitted by the user
   * and registers if the details are correct
   * @param values map of the values submitted by the form
   */
  const handleFormSubmit = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const { name, email, password } = values;

      await createUser(name, email, password);
    } catch (error) {
      messageApi.error({
        type: "success",
        content: "Could not create your account, please try again later."
      });
    }
  }

  if (isUserLoggedIn) return <Navigate to="/dashboard" />;

  return (
    <S.FormContainer>
      {messageContext}
      <S.FormCard>
        <S.RegularTitle>Register</S.RegularTitle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleFormSubmit}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            hasFeedback
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your name" />
          </Form.Item>

          <Form.Item
            name="email"
            hasFeedback
            rules={[{ required: true, message: 'Please input your username' }]}
          >
            <Input placeholder="Your email address" />
          </Form.Item>

          <Form.Item
            name="password"
            hasFeedback
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password placeholder="Your password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Your passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
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
