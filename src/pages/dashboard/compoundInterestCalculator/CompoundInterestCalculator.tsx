import { Form, Input, Select, Button } from "antd";
import { useState } from "react"

const CompoundInterestCalculator = () => {
  const [cI, setCI] = useState('0');

  const onFinish = (values: any) => {
    if (!!values.value && !!values.interest && !!values.term) {
      const value = parseInt(values.value);
      const interest = parseInt(values.interest);
      const term = parseInt(values.term);

      const amount = value * Math.pow((1 + interest / 100), term / 12);

      setCI((amount).toFixed(2));
    }
  }

  return (
    <Form
      name="emi-form"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="value" rules={[{ required: true }]}>
        <Input placeholder="Principal amount" />
      </Form.Item>

      <Form.Item name="interest" rules={[{ required: true }]}>
        <Select
          placeholder="Select a rate of interest"
          allowClear
        >
          <Select.Option value={2}>2%</Select.Option>
          <Select.Option value={3}>3%</Select.Option>
          <Select.Option value={4}>4%</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="term" rules={[{ required: true }]}>
        <Select
          placeholder="Select a term"
          allowClear
        >
          <Select.Option value={24}>24 Months</Select.Option>
          <Select.Option value={36}>36 Months</Select.Option>
          <Select.Option value={48}>48 Months</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Calculate
        </Button>
      </Form.Item>

      {cI !== '0' && (<h3>Your principal at end of term: ${cI}</h3>)}
    </Form>
  );
}

export default CompoundInterestCalculator;
