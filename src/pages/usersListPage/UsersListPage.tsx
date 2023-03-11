import * as S from "../../styles";
import UsersList from "../dashboard/usersList/UsersList";


const UsersListPage = () => {

  return (
    <>
      <S.PageTitle>All Users</S.PageTitle>
      <S.PageSubtitle>These are all the users registered on this website</S.PageSubtitle>
      <UsersList />
    </>
  );
}

export default UsersListPage;
