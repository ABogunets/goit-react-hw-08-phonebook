// import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div>
      <h1 style={{ fontSize: 18, color: 'steelblue' }}>Log In</h1>
      {/* <Helmet>
        <title>Registration</title>
      </Helmet> */}
      <LoginForm />
    </div>
  );
};

export default Login;
