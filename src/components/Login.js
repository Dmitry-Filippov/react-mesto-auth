function Login() {
  return (
    <div className="auth">
    <h1 className="auth__header">Вход</h1>
    <form className="auth__form">
      <input className="auth__input" type="email" placeholder="E-mail" ></input>
      <input className="auth__input" type="password" placeholder="Пароль" ></input>
      <button type="submit" className="auth__submit">Войти</button>
    </form>
    </div>
  )
};
export default Login;