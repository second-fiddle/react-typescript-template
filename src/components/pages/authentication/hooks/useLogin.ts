import { YupJa as yup } from 'utils/validations/yup/i18n/YupJa';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Control,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
} from 'react-hook-form';

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
] => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleLogin: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return [control, handleSubmit, handleLogin];
};

export default useLogin;
