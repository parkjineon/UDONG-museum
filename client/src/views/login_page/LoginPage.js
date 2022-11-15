import { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../api/userAPI";
import { userActions } from "../../store/userSlice";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login, isLoading } = useMutation(LOGIN);

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      email,
      password,
    };
    login(body, {
      onSuccess: (res) => {
        console.log(res);
        // if (res.loginSuccess) {
        if (res.data) {
          // 로그인 성공 > store에 로그인 정보 저장
          dispatch(userActions.login());
          navigate("/");
        } else {
          console.log(res.message);
        }
      },
    });
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="email" value={email} onChange={onEmailChange}></input>
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
      ></input>
      <button type="submit">log in</button>
    </form>
  );
}
export default LoginPage;
