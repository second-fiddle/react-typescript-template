import { YupJa as yup } from 'utils/validations/yup/i18n/yupJa';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Control,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { getFirebaseAuthenticationJaMessage } from 'utils/validations/firebase/authenticationMessagesJa';
import { useState } from 'react';

type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().required().email().label('メールアドレス'),
  password: yup.string().required().label('パスワード'),
});

const useLogin = (): [
  Control<FormValues>,
  UseFormHandleSubmit<FormValues>,
  (data: FormValues) => void,
  string | null,
] => {
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null,
  );

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleLogin: SubmitHandler<FormValues> = async (data) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      const authError = error as AuthError;
      const message = getFirebaseAuthenticationJaMessage(authError, 'login');
      setLoginErrorMessage(message);
    }
  };

  return [control, handleSubmit, handleLogin, loginErrorMessage];
};

export default useLogin;
