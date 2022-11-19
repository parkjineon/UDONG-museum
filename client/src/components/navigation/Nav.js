import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LOGOUT } from "../../api/userAPI";
import { userActions } from "../../store/userSlice";

const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 35px;
  border: 1px solid white;
  border-radius: 7px;
  margin-right: 10px;
  color: white;
`;
const StyledNavLink = styled(Link)`
  text-decoration: none;
`;
const RightNav = styled.div`
  display: flex;
`;
const LeftNav = styled.div``;
const NavContent = styled.div`
  /* background-color: gray; */
  margin: 0px 120px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  /* position: relative;
  z-index: 1; */
`;
function Nav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isAuthenticated);
  // const { data, refetch: logout } = useQuery("logout", LOGOUT, {
  //   enabled: false,
  //   onSuccess: (res) => {
  //     console.log(res);
  //     if (res.logoutSuccess) {
  //       dispatch(userActions.logout());
  //     }
  //   },
  // });
  const onLogoutClick = () => {
    // logout();
  };
  return (
    <NavContainer>
      <NavContent>
        <LeftNav></LeftNav>
        <RightNav>
          {isLoggedIn ? (
            <button onClick={onLogoutClick}>Logout</button>
          ) : (
            <>
              <StyledNavLink to="/login">
                <NavBtn>로그인</NavBtn>
              </StyledNavLink>
              <StyledNavLink to="/register">
                <NavBtn>회원가입</NavBtn>
              </StyledNavLink>
            </>
          )}
        </RightNav>
      </NavContent>
    </NavContainer>
  );
}
export default Nav;
