import { useState } from "react";

import { useAuth } from '../../hooks/useAuth';

import './index.styles.css'

const Login = () => {
  const [user, setUser] = useState({mail: '', password: ''});
  const { login } = useAuth();

  const handleInputOnChange = ({ currentTarget: { name, value } }: React.ChangeEvent<HTMLInputElement> ) => {
    setUser((state) => ({ ...state, [name]: value }));
  };

  const logUser = () => {
    login(user);
  }

  const handleDisabled = () => {
    return user.mail === '' || user.password === '';
  }

  return (
    <div className="loginContainer">
      <div className="inputsContainer">
        <div className="inputWrapper">
          <label htmlFor="mail">Mail</label>
          <input
            type="text"
            name="mail"
            value={user.mail}
            onChange={handleInputOnChange}
            className="editBioInput"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputOnChange}
            className="editBioInput"
          />
        </div>
        <button onClick={logUser} disabled={handleDisabled()}>Log in</button>
      </div>
    </div>
  )
};

export default Login;