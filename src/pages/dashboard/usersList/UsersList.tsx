import { useEffect, useState } from "react";
import * as S from "../../../styles";
import { getAllUsers } from "../../../services/firestore";
import { Table, message } from "antd";

const UsersList = () => {
  const [messageApi, messageContext] = message.useMessage();
  const [users, setUsers] = useState<{
    key: string;
    email: string;
    name: string;
  }[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

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
