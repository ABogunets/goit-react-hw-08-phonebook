// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  // const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      {/* <span style={styles.name}>Welcome, {name}</span> */}
      <span style={styles.name}>Welcome, NAME</span>
      {/* <button type="button" onClick={() => dispatch(logOut())}> */}
      <button type="button">Logout</button>
    </div>
  );
};
