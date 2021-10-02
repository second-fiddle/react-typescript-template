import useShowPassword from 'hooks/molecules/elements/use-show-password';
import { VFC } from 'react';
import { Button, Form } from 'semantic-ui-react';

export type PasswordFieldProps = {
  label?: string;
  placeholder?: string;
  showIcon: boolean;
  error?: string;
};

const PasswordField: VFC<
  PasswordFieldProps & React.HTMLProps<HTMLInputElement>
> = ({
  label = 'パスワード',
  placeholder = 'パスワード',
  showIcon = false,
  ...props
}) => {
  const eyeIconPosition = {
    right: '1px',
    left: 'auto',
    position: 'absolute',
    paddingLeft: 0,
    paddingRight: 0,
    boxShadow: 'none',
  };
  const [inputType, icon, showPassword] = useShowPassword();

  const attrs: React.HTMLProps<HTMLInputElement> = props;
  attrs.placeholder = placeholder;

  return (
    <Form.Field required={attrs.required}>
      {label && <label htmlFor={attrs.id}>{label}</label>}
      {showIcon ? (
        <div className="ui left icon input">
          <input {...attrs} type={inputType} />
          <i className="lock icon" />
          <Button basic onClick={showPassword} style={eyeIconPosition}>
            <i className={`eye ${icon} icon password-eye`} />
          </Button>
        </div>
      ) : (
        <div className="ui right icon input">
          <input {...attrs} type={inputType} />
          <i className="eye slash icon" />
        </div>
      )}
    </Form.Field>
  );
};

export default PasswordField;
