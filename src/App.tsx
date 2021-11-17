import { VFC, useEffect, useContext } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import AuthLayout from 'components/templates/layouts/auth/authLayout';
import LoginPage from 'pages/login/login';
import {
  SignUpPage,
  SinUpLoginPage,
  ProfilePage,
  ProfileConfirmPage,
  CompletePage,
} from 'components/pages/authentication/signup';
import {
  PasswordResetPage,
  PasswordForgetPage,
} from 'components/pages/authentication';
import AppLayout from 'components/templates/layouts/appLayout';
import AuthenticatedRoute from 'routes/authenticatedRoute';
import Dashboard from 'pages/dashboard';
import { UserContext } from './contexts';

const App: VFC = () => {
  const { hash, pathname } = useLocation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="container">
      <Routes>
        <Route path="" element={<AppLayout />}>
          <Route
            path="/"
            element={
              <AuthenticatedRoute>
                <Dashboard />
              </AuthenticatedRoute>
            }
          />
        </Route>

        {!user && (
          <Route path="" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />}>
              <Route path="login" element={<SinUpLoginPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="confirm" element={<ProfileConfirmPage />} />
              <Route path="complete" element={<CompletePage />} />
              <Route path="" element={<Navigate to="login" replace />} />
            </Route>
            <Route path="password-forget" element={<PasswordForgetPage />} />
            <Route path="password-reset" element={<PasswordResetPage />} />
          </Route>
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
