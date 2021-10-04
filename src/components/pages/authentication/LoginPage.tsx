import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';
import PageTitle from 'components/molecules/authentication/PageTitle';
import { RhfEmailField, RhfPasswordField } from 'components/organisms/elements';
import useLogin from './hooks/useLogin';
import './AuthenticatinPage.scss';

const LoginPage: VFC = () => {
  const [control, handleSubmit, handleLogin] = useLogin();

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
            <RhfEmailField
              id="email"
              name="email"
              placeholder="メールアドレス"
              label="メールアドレス"
              required
              showIcon
              control={control}
            />

            <RhfPasswordField
              id="password"
              name="password"
              placeholder="パスワード"
              label="パスワード"
              required
              showIcon
              control={control}
            />

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
