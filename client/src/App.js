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
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";

const PageContainer = styled.div`
  height: 100%;
`;
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Nav />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </Router>
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
