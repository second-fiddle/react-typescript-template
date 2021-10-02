import { VFC } from 'react';
import { Form } from 'semantic-ui-react';

const CompletePage: VFC = () => (
  <Form size="large" style={{ maxWidth: 450 }}>
    <div className="ui left aligned basic segment">
      マンション名 xxxx号 ○○ ○○様
    </div>
    <p>
      メールアドレス（user@example.jp）に確認メールを送信しました。
      <br />
      メールを確認して、本登録を行ってください。
    </p>
  </Form>
);

export default CompletePage;
