import { VFC } from 'react';
import { Button, Form, FormField, Checkbox } from 'semantic-ui-react';
// import { PasswordField } from 'components/molecules/elements';

const ProfilePage: VFC = () => (
  <Form size="large" style={{ maxWidth: 450 }}>
    <div className="ui left aligned basic segment">
      マンション名 xxxx号 ○○ ○○様
    </div>
    <Form.Input
      id="nickname"
      fluid
      placeholder="ニックネーム"
      label="ニックネーム"
    />
    {/* <PasswordField />
    <PasswordField label="パスワード（確認用）" id="confirm-password" /> */}
    <p>緊急時の連絡について</p>
    <FormField>
      <Checkbox toggle label="入居時の連絡先に希望する" />
    </FormField>

    <Button color="teal" fluid size="large">
      登録する
    </Button>
  </Form>
);

export default ProfilePage;
