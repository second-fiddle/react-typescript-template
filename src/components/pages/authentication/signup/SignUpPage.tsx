import PageTitle from 'components/molecules/authentication/pageTitle';
import { VFC } from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import Stepper from '../../../organisms/authentication/signup/Stepper';
import './SignUpPage.scss';

const SignUpPage: VFC = () => (
  <Grid
    textAlign="center"
    verticalAlign="middle"
    className="signup-form-container"
  >
    <Grid.Column>
      <PageTitle title="ユーザー登録" />
      <Segment basic>
        <Stepper />
      </Segment>
      <Segment raised className="signup-content">
        <Outlet />
      </Segment>
    </Grid.Column>
  </Grid>
);

export default SignUpPage;
