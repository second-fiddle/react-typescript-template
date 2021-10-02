import { VFC } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { emailIconProps, emailProps } from 'components/atoms/elements';
// import { PasswordField } from 'components/molecules/elements';

const LoginPage: VFC = () => (
  <Form size="large">
    <Form.Input
      id="building-cd"
      fluid
      icon="building"
      iconPosition="left"
      placeholder="マンションコード"
      label="マンションコード"
    />
    <Form.Input {...emailProps} {...emailIconProps} />
    {/* <PasswordField showIcon /> */}
    <Button color="teal" fluid size="large">
      ログイン
    </Button>
  </Form>
);
export default LoginPage;
