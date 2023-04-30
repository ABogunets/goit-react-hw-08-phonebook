// import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div>
      <h1 style={{ fontSize: 18, color: 'steelblue' }}>Registration</h1>
      {/* <Helmet>
        <title>Registration</title>
      </Helmet> */}
      <RegisterForm />
    </div>
  );
};

export default Register;
