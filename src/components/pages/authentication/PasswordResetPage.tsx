import PageTitle from 'components/molecules/authentication/PageTitle';
// import { PasswordField } from 'components/molecules/elements';
import { VFC } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import './AuthenticatinPage.scss';

const PasswordResetPage: VFC = () => (
  <Grid
    textAlign="center"
    verticalAlign="middle"
    className="authentication-form-container"
  >
    <Grid.Column>
      <PageTitle title="パスワード再設定" />

      <Form size="large">
        <Segment raised>
          {/* <PasswordField showIcon label="新しいパスワード" />
          <PasswordField showIcon label="パスワード確認用" /> */}
          <Button color="teal" fluid size="large">
            パスワード設定
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default PasswordResetPage;
