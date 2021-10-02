import { VFC } from 'react';
import { Form, FormInputProps } from 'semantic-ui-react';

type Props = {
  label?: string;
  placeholder?: string;
  showIcon?: boolean;
};

const EmailField: VFC<Props & FormInputProps> = ({
  label = 'メールアドレス',
  placeholder = 'メールアドレス',
  showIcon = false,
  ...props
}) => {
  const icon: string = showIcon ? 'mail' : '';
  const iconPosition: 'left' | undefined = showIcon ? 'left' : undefined;

  return (
    <Form.Input
      {...props}
      placeholder={placeholder}
      label={label}
      icon={icon}
      iconPosition={iconPosition}
    />
  );
};

export default EmailField;
