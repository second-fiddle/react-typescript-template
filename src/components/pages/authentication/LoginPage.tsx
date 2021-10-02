import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { emailIconProps, emailProps } from 'components/atoms/elements';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';
import PageTitle from 'components/molecules/authentication/PageTitle';
import PasswordField from 'components/molecules/elements/PasswordField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { YupJa as yup } from 'utils/validations/yup/i18n/YupJa';
import './AuthenticatinPage.scss';

type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
const LoginPage: VFC = () => {
  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className="authentication-form-container"
    >
      <Grid.Column>
        <PageTitle title="ログイン" />
        <Form size="large" onSubmit={handleSubmit(handleLogin)}>
          <Segment raised>
            <Form.Input {...emailProps} {...emailIconProps} required />
            <PasswordField placeholder="パスワード" showIcon />
            <Button color="teal" fluid size="large">
              ログイン
            </Button>
            <div className="ui right aligned basic segment">
              <Link to="/password-forget">パスワードを忘れた方はこちら</Link>
            </div>
          </Segment>
        </Form>
        <Message>
          <Link to="/signup">初めての方はこちら</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default LoginPage;
