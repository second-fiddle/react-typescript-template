import { VFC } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';

const ProfileConfirmPage: VFC = () => (
  <Form size="large" style={{ maxWidth: 450 }}>
    <div className="ui left aligned basic segment">
      マンション名 xxxx号 ○○ ○○様
    </div>
    <div className="field">
      <div>ニックネーム</div>
      <div>ニックネーム</div>
    </div>
    <div className="field">
      <div>パスワード</div>
      <div>********</div>
    </div>

    <p>緊急時の連絡</p>
    <div className="field">
      <div>希望する</div>
    </div>

    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Button color="teal" fluid size="large">
            修正する
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button color="teal" fluid size="large">
            登録する
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Form>
);

export default ProfileConfirmPage;
