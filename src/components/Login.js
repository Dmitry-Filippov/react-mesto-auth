import React from 'react';
import * as auth from '../utils/authApi';
import { useHistory } from "react-router-dom";

function Login({setLoggedIn, handleHeaderChange}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  React.useEffect(() => {
    handleHeaderChange("/sign-up", "Регистрация")
  }, [])

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    auth.authorize(email, password).then(res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      setLoggedIn(true);
      history.push("/")
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="auth">
    <h1 className="auth__header">Вход</h1>
    <form className="auth__form" onSubmit={handleSubmit}>
      <input className="auth__input" type="email" placeholder="E-mail" onChange={handleEmailChange} ></input>
      <input className="auth__input" type="password" placeholder="Пароль" onChange={handlePasswordChange} ></input>
      <button type="submit" className="auth__submit">Войти</button>
    </form>
    </div>
  )
};
export default Login;