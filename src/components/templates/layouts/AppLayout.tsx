import { FC } from 'react';
import { Outlet } from 'react-router';
import { Container, Menu } from 'semantic-ui-react';
import './AppLayout.scss';

const AppLayout: FC = () => (
  <>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Symphony
        </Menu.Item>
      </Container>
    </Menu>
    <main>
      <Outlet />
    </main>
  </>
);

export default AppLayout;
