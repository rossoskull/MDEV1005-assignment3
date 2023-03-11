import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/firestore";
import { Table, message } from "antd";

const UsersList = () => {
  const [messageApi, messageContext] = message.useMessage();
  const [users, setUsers] = useState<{
    key: string;
    email: string;
    name: string;
  }[]>([]);

  /**
   * This effect calls the `fetchData` method on this component's first render
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * This method gets a list of all users registered on this website from firestore
   */
  const fetchData = async () => {
    try {
      const allUsers = await getAllUsers();
      setUsers(allUsers);
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: 'Could not fetch the list of users from Firestore.'
      })
    }
  }

  return (
    <>
      {messageContext}
      <Table pagination={false} dataSource={users} columns={[
        {
          key: 'email',
          title: 'Email',
          dataIndex: 'email'
        },
        {
          key: 'name',
          title: 'Name',
          dataIndex: 'name'
        }
      ]} />
    </>
  );
}

export default UsersList;
