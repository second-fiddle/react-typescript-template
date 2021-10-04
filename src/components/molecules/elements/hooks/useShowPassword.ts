import { useState } from 'react';

const useShowPassword = (): [
  'text' | 'password',
  string,
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
] => {
  const [inputType, setInputType] = useState<'text' | 'password'>('password');
  const [iconType, setIconType] = useState('slash');

  const showPassword = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const isShow = inputType === 'password';
    setInputType(isShow ? 'text' : 'password');
    setIconType(isShow ? '' : 'slash');
  };

  return [inputType, iconType, showPassword];
};

export default useShowPassword;
