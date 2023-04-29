import { Header } from './AppBar.styled';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
// import { useAuth } from 'hooks';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {/* <UserMenu /> */}
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
};
