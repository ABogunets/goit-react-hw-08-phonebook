import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormWrapper, Label, Input, SubmitBtn } from './LoginForm.styled';

// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/operations';

export const LoginForm = () => {
  // ----controlled form
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  // ----
  // ----form submit
  const handleSubmit = e => {
    e.preventDefault();
    //  dispatch(authOperations.register({ name, email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  // ----

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor={emailInputId}>Email</Label>
      <Input
        type="email"
        name="email"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={emailInputId}
        value={email}
        onChange={handleChange}
      />
      <Label htmlFor={passwordInputId}>Password</Label>
      <Input
        type="password"
        name="password"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={passwordInputId}
        value={password}
        onChange={handleChange}
      />
      <SubmitBtn type="submit">Register</SubmitBtn>
    </FormWrapper>
  );
};
