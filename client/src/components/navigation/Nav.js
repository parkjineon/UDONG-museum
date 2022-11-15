import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT } from "../../api/userAPI";
import { userActions } from "../../store/userSlice";

function Nav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isAuthenticated);
  const { data, refetch: logout } = useQuery("logout", LOGOUT, {
    enabled: false,
    onSuccess: (res) => {
      console.log(res);
      if (res.logoutSuccess) {
        dispatch(userActions.logout());
      }
    },
  });
  const onLogoutClick = () => {
    logout();
  };
  return (
    <>
      {isLoggedIn ? (
        <button onClick={onLogoutClick}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </>
  );
}
export default Nav;
