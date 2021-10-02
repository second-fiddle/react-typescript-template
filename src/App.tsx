import { VFC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import {
  SignUpPage,
  SinUpLoginPage,
  ProfilePage,
  ProfileConfirmPage,
  CompletePage,
} from 'components/pages/authentication/signup';
import LoginPage from 'components/pages/authentication/LoginPage';
import {
  PasswordResetPage,
  PasswordForgetPage,
} from 'components/pages/authentication';
import Dashboard from 'components/pages/dashbord';
import AppLayout from 'components/templates/layouts/AppLayout';

const App: VFC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="container">
      <Routes>
        <Route path="" element={<AppLayout />}>
          <Route path="signup" element={<SignUpPage />}>
            <Route path="login" element={<SinUpLoginPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="confirm" element={<ProfileConfirmPage />} />
            <Route path="complete" element={<CompletePage />} />
            <Route path="" element={<Navigate to="login" replace />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="password-forget" element={<PasswordForgetPage />} />
          <Route path="password-reset" element={<PasswordResetPage />} />
          <Route path="" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
