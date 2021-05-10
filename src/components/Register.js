import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
    <h1 className="auth__header">Регистрация</h1>
    <form className="auth__form">
      <input className="auth__input" type="email" placeholder="E-mail" ></input>
      <input className="auth__input" type="password" placeholder="Пароль" ></input>
      <button type="submit" className="auth__submit">Зарегистрироваться</button>
    </form>
    <p className="auth__paragraph">Уже зарегистрированы? <NavLink className="auth__link" activeClassName="auth__link_active" to="/sign-in">Войти</NavLink></p>
    </div>
  )
};

export default Register;