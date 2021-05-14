import React from 'react';

function Login({handleLogin, handleHeaderChange}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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
    handleLogin(email, password);
  }
  return (
    <div className="auth">
    <h1 className="auth__header">Вход</h1>
    <form className="auth__form" onSubmit={handleSubmit}>
      <input className="auth__input" type="email" placeholder="E-mail" onChange={handleEmailChange} value={email} ></input>
      <input className="auth__input" type="password" placeholder="Пароль" onChange={handlePasswordChange} value={password} ></input>
      <button type="submit" className="auth__submit">Войти</button>
    </form>
    </div>
  )
};
export default Login;