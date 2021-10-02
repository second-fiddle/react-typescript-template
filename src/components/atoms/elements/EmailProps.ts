import { FormInputProps } from 'semantic-ui-react';

const emailProps: FormInputProps = {
  placeholder: 'メールアドレス',
  type: 'email',
  label: 'メールアドレス',
};
const emailIconProps: FormInputProps = {
  icon: 'mail',
  iconPosition: 'left',
};

export { emailProps, emailIconProps };
