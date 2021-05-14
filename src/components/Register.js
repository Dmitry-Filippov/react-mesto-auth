import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as auth from "../utils/authApi.js";

function Register({handleHeaderChange, handleRegister}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  React.useEffect(() => {
    handleHeaderChange('/sign-in', 'Войти')
  }, [])

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(email, password);
  }

  return (
    <div className="auth">
    <h1 className="auth__header">Регистрация</h1>
    <form className="auth__form" onSubmit={handleSubmit}>
      <input className="auth__input" type="email" placeholder="E-mail" onChange={handleEmailChange} value={email} ></input>
      <input className="auth__input" type="password" placeholder="Пароль" onChange={handlePasswordChange} value={password} ></input>
      <button type="submit" className="auth__submit" >Зарегистрироваться</button>
    </form>
    <p className="auth__paragraph">Уже зарегистрированы? <NavLink className="auth__link" activeClassName="auth__link_active" to="/sign-in">Войти</NavLink></p>
    </div>
  )
};

export default Register;