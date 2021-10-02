import { VFC } from 'react';
import { Step } from 'semantic-ui-react';

const steps = [
  {
    key: 'authentication',
    icon: 'sign-in',
    title: 'ログイン',
    active: true,
  },
  {
    key: 'profile',
    icon: 'user',
    title: 'プロフィール',
  },
  { key: 'confirm', icon: 'info', title: '確認' },
  { key: 'complete', icon: 'mail', title: '完了' },
];

const Stepper: VFC = () => <Step.Group items={steps} size="mini" />;

export default Stepper;
