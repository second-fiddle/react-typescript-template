import { VFC } from 'react';
import { emailIconProps, emailProps } from 'components/atoms/controls/props';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
// import './AuthenticatinPage.scss';
import PageTitle from 'components/molecules/authentication/pageTitle';

const PasswordForgetPage: VFC = () => (
  <Grid
    textAlign="center"
    verticalAlign="middle"
    className="authentication-form-container"
  >
    <Grid.Column>
      <PageTitle title="パスワードリセット" />
      <Form size="large">
        <Segment raised>
          <Form.Input {...emailProps} {...emailIconProps} />
          <Button color="teal" fluid size="large">
            送信
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default PasswordForgetPage;
