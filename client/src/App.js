import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import LoginPage from "./views/login_page/LoginPage";
import MainPage from "./views/main_page/MainPage";
import rootReducer from "./store/index";
import store from "./store/index";
import RegisterPage from "./views/register_page/RegisterPage";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  /* padding-top: 70px; */
  padding: 70px 120px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Nav />
            <PageContainer>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </PageContainer>
          </Router>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
