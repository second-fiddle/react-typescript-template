/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { VFC } from 'react';
import { Button, Form } from 'semantic-ui-react';
import ErrorMessage from 'components/atoms/elements/ErrorMessage';
import { InputFieldProps, RhfRegisterInputFieldProps } from './ElementProps';
import useShowPassword from './hooks/useShowPassword';

type PasswordFieldProps = InputFieldProps & RhfRegisterInputFieldProps;

const PasswordField: VFC<PasswordFieldProps> = (props: PasswordFieldProps) => {
  const eyeIconPosition = {
    right: '1px',
    left: 'auto',
    position: 'absolute',
    paddingLeft: 0,
    paddingRight: 0,
    boxShadow: 'none',
  };
  const {
    label,
    id,
    placeholder,
    isRequired,
    showIcon,
    errorMessage,
    value,
    onChange,
    onBlur,
  } = props;

  const [inputType, icon, showPassword] = useShowPassword();

  return (
    <Form.Field required={isRequired}>
      {label && <label htmlFor={id}>{label}</label>}
      {showIcon ? (
        <div className="ui left icon input">
          <input
            id={id}
            placeholder={placeholder}
            type={inputType}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <i className="lock icon" />
          <Button basic onClick={showPassword} style={eyeIconPosition}>
            <i className={`eye ${icon} icon password-eye`} />
          </Button>
        </div>
      ) : (
        <div className="ui right icon input">
          <input
            id={id}
            placeholder={placeholder}
            type={inputType}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <i className="eye slash icon" />
        </div>
      )}
      <ErrorMessage message={errorMessage} />
    </Form.Field>
  );
};

export default PasswordField;
