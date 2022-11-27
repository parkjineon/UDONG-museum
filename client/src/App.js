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
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import PublicRoute from "./hoc/PublicRoute";
import Me from "./hoc/Me";
import ProfilePage from "./views/profile_page/ProfilePage";
import EditProfilePage from "./views/edit_profile_page/EditProfilePage";
import PrivateRoute from "./hoc/PrivateRoute";

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  /* padding-top: 70px; */
  padding: 0px 120px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export let persistor = persistStore(store);
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Nav />
              <PageContainer>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Me>
                        <MainPage />
                      </Me>
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <PublicRoute>
                        <LoginPage />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <PublicRoute>
                        <RegisterPage />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/profile/:uid"
                    element={
                      <Me>
                        <PrivateRoute>
                          <ProfilePage />
                        </PrivateRoute>
                      </Me>
                    }
                  />
                  <Route
                    path="/profile/edit"
                    element={
                      <Me>
                        <PrivateRoute>
                          <EditProfilePage />
                        </PrivateRoute>
                      </Me>
                    }
                  />
                </Routes>
              </PageContainer>
            </Router>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
