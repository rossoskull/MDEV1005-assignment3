import { Navigate } from "react-router-dom";
import useAuth from "../../services/auth";

const Dashboard = () => {
  const { isUserLoggedIn, logoutUser } = useAuth();

  if (!isUserLoggedIn) return <Navigate to="/" />

  return (
    <div>
      Dashboard
      <button onClick={logoutUser}>Log out</button>
    </div>
  )
}

export default Dashboard;