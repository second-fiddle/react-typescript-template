import { VFC } from 'react';
import { Header, Image } from 'semantic-ui-react';

type props = {
  title: string;
};

const PageTitle: VFC<props> = ({ title }) => (
  <Header as="h2" color="teal" textAlign="center">
    <Image src="https://react.semantic-ui.com/logo.png" /> {title}
  </Header>
);

export default PageTitle;
